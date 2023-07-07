const ws = require("ws");

const wss = new ws.Server(
  {
    port: 5000,
  },
  () => console.log(`Server started on 5000`)
);

let clients = new Map();
const chatHistories = new Map();

function generateConversationId(sender, recipient) {
  return [sender, recipient].sort().join(":");
}
const Events = {
  current_login: "current_login",
  chat_history: "chat_history",
  private_message: "private_message",
  error: "error",
};
wss.on("connection", function connection(ws) {
  ws.on("message", function (message) {
    const data = JSON.parse(message);

    switch (data.event) {
      case Events.current_login:
        // Store the client's login in the Map
        clients.set(ws, data.sender);
        const conversationId = generateConversationId(
          data.sender,
          data.recipient
        );
        if (chatHistories.has(conversationId)) {
          ws.send(
            JSON.stringify({
              event: Events.chat_history,
              messages: chatHistories.get(conversationId),
            })
          );
        }
        break;
      case Events.private_message:
        // Send private message to specified recipient
        const recipient = Array.from(clients).find(
          ([client, sender]) => sender === data.recipient
        )?.[0];

        const sender = clients.get(ws);

        if (recipient) {
          recipient.send(
            JSON.stringify({
              ...data,
              sender,
            })
          );
          ws.send(
            JSON.stringify({
              ...data,
              sender,
            })
          );

          const timestamp = new Date().toISOString();
          const conversationId = generateConversationId(sender, data.recipient);
          const messageData = {
            ...data,
            timestamp,
          };
          if (!chatHistories.has(conversationId)) {
            chatHistories.set(conversationId, []);
          }
          chatHistories.get(conversationId).push(messageData);
        } else {
          // Send error message to sender if recipient is not found
          ws.send(
            JSON.stringify({
              event: Events.error,
              content: `Error: User "${data.sender}" not found`,
            })
          );
        }
        break;
    }
  });
});

function broadcastMessage(message, id) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}

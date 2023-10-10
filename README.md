# Discord API Helper

Discord API Helper is a package that simplifies sending messages to Discord channels using the Discord API. This package uses Axios to make HTTP requests to the Discord API, allowing you to send messages easily.

## Installation

To use Discord API Helper in your project, you can install it via npm or yarn:

```bash
npm install discord-api-helper
# or
yarn add discord-api-helper
```

## Usage
1. Import the Discord class from the package in your TypeScript code:
```typescript
import Discord from 'discord-api-helper';
```
2. Create an instance of the Discord class by providing your Discord bot's base URL and access token:
```typescript
const discord = new Discord('YOUR_DISCORD_BASE_URL', 'YOUR_DISCORD_ACCESS_TOKEN');
```
3. Send a message to a Discord channel using the sendMessageToChannel method:

```typescript
const channelId = 'YOUR_CHANNEL_ID'; // Replace with your channel ID
const message = 'Hello, Discord!';

discord.sendMessageToChannel(channelId, message)
  .then((response) => {
    console.log('Message sent:', response);
  })
  .catch((error) => {
    console.error('Error sending message:', error);
  });
```
> Make sure to replace 'YOUR_DISCORD_BASE_URL', 'YOUR_DISCORD_ACCESS_TOKEN', and 'YOUR_CHANNEL_ID' with your actual Discord base URL, access token, and the channel ID where you want to send the message.
 
## Contribution

Contributions and issues are welcome! If you find a bug or want to add a feature, please open an issue on GitHub or create a pull request.
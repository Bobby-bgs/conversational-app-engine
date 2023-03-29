class ConversationalApp {
    appName = 'My App';
    chatListTitle = 'My Chats';
    newChatLabel = 'New Chat';
    newChatName = 'New Chat...';
    contentPreviewPlaceholder = 'No Preview';
    chatStartInstruction = 'Please keep in mind that we need to ensure that the API usage does not exceed 4K.';

    constructor(context) {
        this.context = context;
    }
    getDefaultMessages() {return []};

    getChatNameFromMessage(message) {return 'Unknown';};
    getTextMessage(message) {return message;}
    getAppContent(message) {return '<h1>No Content</h1>';}
}

export {ConversationalApp};
<script setup lang="ts">
const wsUri = ref("ws://localhost:8080");
let output: Element | null;
let pingInterval: NodeJS.Timeout;
const websocket: Ref<WebSocket | undefined> = ref();


onMounted(() => {
    output = document.querySelector("#output");
})


function writeToScreen(message: string) {
    if(output){
        output.insertAdjacentHTML("afterbegin", `<p>${message}</p>`);
    }
}

function sendMessage(message: string) {
    writeToScreen(`SENT: ${message}`);
    if(websocket.value){
        websocket.value.send(JSON.stringify({id: 1}));
    }
}

const beginWsConnection = () => {
    websocket.value = new WebSocket(wsUri.value);
    websocket.value.onopen = (e) => {
    writeToScreen("CONNECTED");
    sendMessage("1");
    };

    websocket.value.onclose = (e) => {
        writeToScreen("DISCONNECTED");
        clearInterval(pingInterval);
    };

    websocket.value.onmessage = (e) => {
        writeToScreen(`RECEIVED: ${e.data}`);
    };

    websocket.value.onerror = (e) => {
        writeToScreen(`ERROR: ${e}`);
    };
}

const closeWsConnection = () => {
    websocket.value?.close();
}

</script>

<template>
    <h1 class="text-2xl">WebSocket Demo</h1>
    <div id="output" class="border-4 border-dashed"></div>
    <button class="bg-black text-white p-2 rounded-lg" @click="beginWsConnection">Start</button>
    <button class="bg-black text-white p-2 rounded-lg" @click="closeWsConnection">Close</button>
    <button class="bg-black text-white p-2 rounded-lg" @click="sendMessage('1')">Send Message</button>
</template>

<style scoped>

</style>
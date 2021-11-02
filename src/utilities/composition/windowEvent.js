import { onUnmounted } from "vue";
import { onMounted } from "vue";

export default function windowEvent(handleKeydown) {

    onMounted(() => {
        window.addEventListener("keydown", handleKeydown);
    });
    onUnmounted(() => {
        window.removeEventListener("keydown", handleKeydown);
    });
}
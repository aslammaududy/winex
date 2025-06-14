import {Elysia} from "elysia";
import {fd} from "./plugins/folders";
import {subfolders} from "./plugins/subfolders";
import cors from "@elysiajs/cors";

const app = new Elysia()
    .use(cors())
    .use(fd)
    .use(subfolders)
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

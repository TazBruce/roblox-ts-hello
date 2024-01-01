import { makeHello } from "shared/module";
import { setupLavaEvents } from "../shared/components/lava";

print(makeHello("main.server.ts"));

setupLavaEvents();
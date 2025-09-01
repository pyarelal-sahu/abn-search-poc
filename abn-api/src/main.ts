import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["http://localhost:5173", "https://abn-search-poc.netlify.app"],
    methods: "GET,OPTIONS",
    credentials: false,
  });
  const port = Number(process.env.PORT) || 3000;
  await app.listen(port, "0.0.0.0");
}
bootstrap();

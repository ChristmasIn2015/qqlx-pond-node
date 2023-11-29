import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

import { PondNode } from "qqlx-core";
import { toNumber, toString, toBoolean } from "qqlx-cdk";

import { AppModule } from "./app.module";


async function bootstrap () {

    // 大部分服务 都需要在启动时指定 pond-node 配置中心的地址
    const pond_node_address = process.argv[3]
    const pond_node: PondNode = {
        name: "your_service_name",
        lan_ip: "",
        port: -1
    }
    console.log(99, "hello nesths !", process.argv)

    // 创建基于 TCP 协议的微服务
    const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.TCP,
        options: { host: "127.0.0.1", port: 2234 },
    });
    await microservice.listen();

    // 启动 RESTful API
    const app = await NestFactory.create(AppModule);
    await app.listen(1234);
}
bootstrap();

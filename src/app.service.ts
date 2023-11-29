import { Controller, Body, Get, Post, Put, Patch, Delete, SetMetadata, UseGuards } from "@nestjs/common";

import { } from "qqlx-core";
import { } from "qqlx-cdk";
import { } from "qqlx-sdk";

@Controller()
export class AppController {
    constructor() { }

    @Get("/")
    async get () {
        console.log(123)
    }
}

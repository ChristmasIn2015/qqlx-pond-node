import { Controller, Query, Body, Get, Patch } from "@nestjs/common";

import { PondNode, PATH_POND_NODE } from "qqlx-core";
import { toNumber, toString } from "qqlx-cdk";
import { getLocalNetworkIPs } from "qqlx-sdk";

@Controller()
export default class {
    cache = new Map<string, PondNode>()

    constructor() {
    }

    @Get(PATH_POND_NODE)
    async get (@Query() query: Record<string, string>) {
    }

    @Patch(PATH_POND_NODE)
    async patch (@Body() body: PondNode) {
    }
}

import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ["warn", "error"],
    });
  }

  //Indica a Inicialização da conexao do BD
  onModuleInit() {
    return this.$connect();
  }

   //Indica a desconexao do BD
  onModuleDestroy() {
    return this.$disconnect();
  }
}

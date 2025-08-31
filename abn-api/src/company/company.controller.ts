import { Controller, Get, Param, Query } from "@nestjs/common";
import { CompanyService } from "./company.service";
import { SearchDto } from "./search.dto";
@Controller()
export class CompanyController {
  constructor(private readonly svc: CompanyService) {}
  @Get("/health") health() {
    return { status: "ok" };
  }
  @Get("/search") search(@Query() q: SearchDto) {
    return this.svc.search(q);
  }
  @Get("/company/:abn") byAbn(@Param("abn") abn: string) {
    return this.svc.getByAbn(abn) || { error: "Not found" };
  }
}

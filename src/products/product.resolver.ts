import { Resolver, Query, Args, Int } from "@nestjs/graphql";
import { Product } from "./entities/product.entity";
import { ProductService } from "./product.service";

@Resolver(() => Product)
export class ProductResolver {
  constructor(
    private readonly productService: ProductService
  ) { }
  @Query(() => Product)
  test(@Args("id", { type: () => Int }) id: number) {
    return this.productService.create()
  }

}

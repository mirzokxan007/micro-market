import { Controller  } from '@nestjs/common';
import { SubCategoryService } from './subcategory.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import type { SubCategoryCreateDto, SubCategoryDeleteDto, SubCategoryUpdateDto } from './dtos';
import { SubCommand } from './enums';


@Controller()
export class SubCategoryController {
  private readonly service: SubCategoryService;
  constructor(service: SubCategoryService) {
    this.service = service;
  }

  @MessagePattern(SubCommand.SUBCATEGORY_CREATE)
  createSubcategory(
    @Payload() payload: SubCategoryCreateDto,) {
    return this.service.createSubcategory(payload);
  }


  @MessagePattern(SubCommand.SUBCATEGORY_DELETE)
  deleteSubCategory(
    @Payload() payload: SubCategoryDeleteDto) {
  
    return this.service.deleteSubCategory(payload);
  }

  @MessagePattern(SubCommand.SUBCATEGORY_UPDATE)
   updateSubcategory(
    @Payload() payload: SubCategoryUpdateDto) {
      
    return this.service.updateSubcategory(payload);
  }

  @MessagePattern(SubCommand.SUBCATEGORY_GET)
  getSubcategory(
   @Payload() payload: SubCategoryDeleteDto) {
     
   return this.service.getSubcategory(payload);
 }
}


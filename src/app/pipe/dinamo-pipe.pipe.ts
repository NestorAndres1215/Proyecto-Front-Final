import { Injector, Pipe, PipeTransform, Type } from '@angular/core';

@Pipe({
  name: 'dinamoPipe'
})
export class DinamoPipePipe implements PipeTransform {

  constructor(private injector: Injector) {}

  transform(value: any, requiredPipe: Type<any>, pipeArgs: any = ''): any {
    const injector = Injector.create({
      name: 'DinamicoPipePipe',
      parent: this.injector,
      providers: [
        { provide: requiredPipe }
      ]
    })
    const pipe = injector.get(requiredPipe)
    return pipe.transform(value, pipeArgs);
  }


}

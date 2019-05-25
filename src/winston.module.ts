import { DynamicModule, Global, Module } from '@nestjs/common';
import { WinstonModuleAsyncOptions, WinstonModuleOptions } from './winston.interfaces';
import { createWinstonAsyncProviders, createWinstonProviders } from './winston.providers';

@Global()
@Module({})
export class WinstonModule {
  public static forRoot(options: WinstonModuleOptions): DynamicModule {
    const providers = createWinstonProviders(options);

    return {
      module: WinstonModule,
      providers: providers,
      exports: providers,
    };
  }

  public static forRootAsync(options: WinstonModuleAsyncOptions): DynamicModule {
    const providers = createWinstonAsyncProviders(options);

    return {
      module: WinstonModule,
      imports: options.imports,
      providers: providers,
      exports: providers,
    };
  }
}

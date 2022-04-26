import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
 
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        // logging: true,
        dropSchema: false,
        synchronize: true,
        ssl:
          configService.get('NODE_ENV') === 'production'
            ? {
                rejectUnauthorized: false,
          ca: `MIIEQTCCAqmgAwIBAgIUVD88soxrUqyo9kd5MSG2KI2RjJMwDQYJKoZIhvcNAQEM
              BQAwOjE4MDYGA1UEAwwvOWFhYTI0YjUtNzZjYS00MmNiLWI2NzQtYzU5NmZkZGVm
              Y2U3IFByb2plY3QgQ0EwHhcNMjIwMjEyMTUzMjM4WhcNMzIwMjEwMTUzMjM4WjA6
              MTgwNgYDVQQDDC85YWFhMjRiNS03NmNhLTQyY2ItYjY3NC1jNTk2ZmRkZWZjZTcg
              UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBANOWjr7F
              8EEp2wYLb4lYr9Ii5gH9RnaAfY91myJKkqJLOiv0HoRIrMNelGhDmFVq0N6UFa8I
              q7cp4QGHYamVqHzcReXlG51zA+mTCa50wVyzkrVv59OlxNfQdDexVaq0d7mw4cBb
              oaBfXJbqUoSS87rJjDJPHI9pGQGHI5UenfAo3+HD33ESL86kAUKkSLuPY3cBRasZ
              4xG0QAZMG9LVQaMsXv9JDrajK4EeElLVkOFPPqSYUPCD7vOusTbGGEAXqmXmhngd
              +6FCrdl46SAbjAry2OfARBg2cpj1rNnL9HcUQFf4WU6r5qwoPK0XEpVdKRTjj9V0
              cHDW6YohL4Wa2lEHRc6rUeWX4fgkuEn/2JTQczuHUqhPSW0EvMgMKO0mbFGoo4Lh
              41fdTnUfDJlQMlB9ciaos7kvTB/D0sZfWNce5XIu65Bh7wcEnQ7wPuFpEwd2ykGb
              Dt+fJukdFKSNRLmaqvcU/ECC2yPnEAWdUITkvcO+GraopGu4YmF8+AQMgwIDAQAB
              oz8wPTAdBgNVHQ4EFgQUP/CWKxc3KlOpF7VU8ztGEjZOfx0wDwYDVR0TBAgwBgEB
              /wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAK7RqANg6ynF444J
              fgeSwQZrmh15YBd3e/0KEQikV/qaRmMhknznVAKsH+tA8mcrBqIC+X0SrZxQvzr8
              yPMw3tnym1WCTJ51IWmCIXLrPhtSYigwVayV43jUCOhvZbQCGp4EyrLpCE1i3IU6
              qT+tKwsiY9mzN2FU+CpVaqWC8mZ5SthPrlwxDL6phC9CXuuBCwHjPCFxE7wxSh8e
              qqPM1ZNJtvG10tj8UGuKIe5B7tTtOXX998sxQ5fioDUb9cD8DMDkIoqoRCZv18jI
              HLRlV4O0G24lljBbOxRRZZcFIdGKSIRmzn5VhjT3CflmohrAo51rGDRWnYsGZxlu
              l6l/iJFj9Xbaa7nj90z/V5/i7/mKExAdZaxfHQYpxgzgG1/p4pPHA/BnUen/tI3O
              /jypffQ6YBdViD2kTAOXy6XufzzwOvM/LQ2AuT9S9fsOJXyQIBV9bm8+dC8GH35I
              yN+OxpIbVK4IYtUqWPVhfs65zueH6DwyixiIleqs77J1foIdgg==`,
        }: false,
      })
    }),
  ],
})
export class DatabaseModule {}

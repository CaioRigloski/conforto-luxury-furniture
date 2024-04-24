<img alt="Screenshot" src="/public/github/conforto.png"/>

## Conforto

Conforto is a luxury modern furniture store!

## Technologies

* [Next.js](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [AWS S3](https://aws.amazon.com/s3/?nc1=h_ls)
* [Prisma](https://www.prisma.io/)
* [MySQL](https://www.mysql.com/)

## Instalation and Usage
Designed with figma and built with Next.js, it uses /pages router, Typescript for type checking and CSS modules for styling.


* ### MySQL
To store the products data a MySQL schema with a single table is used:
```
CREATE TABLE product (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(500) NOT NULL,
    category VARCHAR (255) NOT NULL,
    image_url VARCHAR(500) NOT NULL
);

```

`image_url` pattern = `/category/image.jpg`

The database config must be in the .env file ([See more](https://www.prisma.io/docs/orm/overview/databases/mysql#base-url-and-path)):
```
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

* ### AWS S3
A AWS S3 bucket have to be created and configured. See this [link](https://vercel.com/templates/next.js/aws-s3-image-upload-nextjs).

`env.local` file:
```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=
NEXT_PUBLIC_BASE_URL=
```

* ### Commands

```bash
$ git clone https://github.com/CaioRigloski/conforto-luxury-furniture.git

$ npm install
```

* for development usage:
```bash
$ npm run dev
```

* for production usage:
```bash
$ npm run build
$ npm run start
```
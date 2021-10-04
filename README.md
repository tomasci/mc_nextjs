# MinecraftMods.xyz – frontend
This project is more likely not a real site, but something like a testing ground. On it, I try new technologies, develop some strange things and features, which were not found anywhere before, in the sense, on such sites. The backend is an api and exchanges data with the client in json format, written in Typescript, and is based on express. The client is using Redux.js, but not all functionality has been published or implemented, so it is may be not be visible.

Technologies used (client):
`NextJS (React, Javascript), Sass (Scss), Redux.js (redux-toolkit)`

Technologies used (server):
`typescript, express, jsonwebtoken, canvas, bcrypt, prisma, prettier, eslint`

Features:
- the backend uses a server-side Canvas to render pictures with text and icons for the OpenGraph Image, while the picture is generated once upon the first page request
- the functionality of reading game modification files has been implemented, which allows you to automatically display descriptions of modifications, their names, versions, versions of the game, crafting recipes and in the future other features on the site
- modern Typescript ORM - Prisma is used to work with the database
- the use of bcrypt made it possible to achieve secure storage of user passwords in the database
- prettier used to achieve cleanliness of the code, and eslint is to avoid some simple mistakes
- SSR

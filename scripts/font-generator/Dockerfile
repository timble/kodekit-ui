FROM node:10

WORKDIR /usr/src/app

COPY scripts/font-generator/package*.json ./

RUN npm install

RUN apt-get update && apt-get -y install fontforge ttfautohint && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY ./src ./src
COPY ./dist ./dist
COPY ./node_modules/open-iconic ./node_modules/open-iconic

COPY scripts/font-generator/gruntfile.js ./

CMD ["npx", "grunt", "--verbose"]


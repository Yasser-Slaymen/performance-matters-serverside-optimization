> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Coding the Curbs Optimization


Voor dit project ga ik optimizen voor het Coding the curbs project uit sprint 9.
## Serverside Performance Optimalisatie
Voor deze deeltaak, heb ik de website van coding the curbs geoptimalsieerd,waar ik maakte met behulp van Node js , express en ejs.
Hierbij heb ik preformance audit gedaan.met behulp van Lighthouse en heb ik ook gekeken naar het network tabje hoe groot mijn project is.

#### Befor


![Screenshot (13)](https://user-images.githubusercontent.com/90189815/167798790-41d69567-d503-4598-8548-b86e433972cd.png)

![Screenshot (15)](https://user-images.githubusercontent.com/90189815/167801056-ab2086ba-2e3a-4d16-919c-f19a4d2d3146.png)

#### After


![Screenshot (19)](https://user-images.githubusercontent.com/90189815/167800460-bac09123-948c-4ede-a37e-67395a81bb92.png)

![Screenshot (16)](https://user-images.githubusercontent.com/90189815/167801359-86630282-72a9-42f0-b3f6-b1e11f839985.png)

![Screenshot (17)](https://user-images.githubusercontent.com/90189815/167800770-dceb3351-7ff0-4f72-a2fb-26c161f0e69e.png)


# Minifying
Met behulp van postcss, cssnano,autoprefixer. heb ik de CSS geminified, zodat mijn applicatie sneller werkt.
### Code splitting
  Zelf heb ik niet in mijn client-side Javascript ge-code split maar heb ik wel Met behulp Module exports, heb ik de code  splitting gemaak. zodat werden op iedere pagina apart  ingeladen. IK heb individueel route voor iedre Method gedaan.  bestanden alleen op de index in te laden.zodat de snelheid stijgt
### Caching
Ik heb de Cache-control header gebruikt zodat er om de 8 minuten een request kan worden gemaakt naar de server. Dit zorgt ervoor dat er niet constant requests naar de server gestuurd blijven worden. Dit bespaart kosten voor de server
### Compressie
Voor de compressie heb ik de express compression package gebruikt.Zodat het maat van bestanden kleiner worden. Dit zorgt ook voor applicatie sneller worden


## Bronnen
[Postcss](https://postcss.org/)
[cache header](https://regbrain.com/article/cache-headers-express-js)
## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).

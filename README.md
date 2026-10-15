# Saribao — landing page

Landing page française de l’application Android Saribao, construite avec Next.js App Router, TypeScript, Tailwind CSS et Lucide React.

Le thème clair/sombre suit les préférences de l’appareil par défaut. Les visiteurs peuvent le changer depuis la barre de navigation ; leur choix est mémorisé dans le navigateur.

## Démarrer en local

Depuis ce dossier :

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000).

## Vérifications et production

```bash
npm run lint
npm run build
npm run start
```

Le projet peut être déployé sur Vercel ou sur un hébergeur compatible avec Next.js. Aucun domaine n’étant encore confirmé, l’URL canonique et le sitemap ne sont pas renseignés.

Lorsque le domaine public est confirmé, configurez `NEXT_PUBLIC_SITE_URL` avec son URL complète (par exemple `https://saribao.mg`) afin que les aperçus de partage utilisent l’adresse publique. Sur Vercel, `VERCEL_URL` est également pris en charge.

## Compteur de téléchargements

Le compteur partagé s’appuie sur Upstash Redis. Créez une base Redis compatible avec Upstash, puis ajoutez ses identifiants REST dans les variables d’environnement du projet Vercel :

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

Ajoutez ces variables à chaque environnement Vercel utilisé (Preview et Production), puis redéployez. En local, vous pouvez les définir dans un fichier `.env.local` non versionné. Sans identifiants valides, le compteur indique qu’il est indisponible et le lien direct vers l’APK continue de fonctionner.

Le total compte les demandes de téléchargement lancées depuis les boutons du site ; il ne confirme ni la fin du transfert du fichier ni l’installation de l’application.

## Ressources de l’application

- Les captures réelles utilisées par la galerie se trouvent dans `public/images/`.
- Le fichier Android actuellement fourni est `public/saribao.apk`. Pour le remplacer, gardez ce chemin ou modifiez `apk.href` et `apk.publicFile` dans `src/config/site.ts`.
- Le logo utilisé est `public/logos/charbon.png`.
- La galerie, les liens de navigation et les informations de téléchargement sont centralisés dans `src/config/site.ts`.

La page de confidentialité est un emplacement à compléter et à faire vérifier par l’éditeur selon le fonctionnement réel de l’application ; elle ne constitue pas encore une politique de confidentialité.

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
    router.go(-1);
}
</script>

<template>
    <div class="sticky top-0">
        <div class="relative flex flex-col degradsombre pt-28 px-6">
        <button @click="goBack" class="absolute top-10">
        <img src="/public/img/icones/Fleche- retour.svg" alt="fleche retour en arriere">
        </button>
        <section class="z-10 ">
            
        <h1 class="mb-6">Informations légales</h1>
        <nav>
            <ul class="flex flex-col gap-2 mb-24">
                <li>
                    <a href="#mentions"><h5>MENTIONS LÉGALES</h5></a>
                </li>
                <li>
                    <a href="#cgu"><h5>CGU</h5></a>
                </li>
                <li>
                    <a href="#pdd"><h5>PROTECTION DES DONNÉES</h5></a>
                </li>
            </ul>
        </nav>
        
    </section>
    
        <img src="/img/etoile-nuage-legal.svg" alt="illustration de fond" class=" absolute inset-0 top-10 z-0 max-h-full w-full object-cover">
    </div></div>
    
    <div class="bg-violet-700 flex flex-col px-6 gap-14">
        <section id="mentions" class="flex flex-col gap-4">
        <h5 >MENTIONS LÉGALES</h5>
        <p>Éditeur de l'application Onylix : <strong>Onylix SARL</strong>
            <br>
            Adresse : 4 Pl. Lucien Tharradin, Montbéliard (25200), France
            <br>
            Téléphone : 03 81 99 47 34
            <br>
            Email : onylix.contact@gmail.com
            <br>
            RCS : 336 264 085
            <br>
            Numéro de TVA intracommunautaire : FR 65 336264085
            <br>
            Capital social : 1 207€
            <br>
            Directrice :  <strong>Mélissa Poilâne</strong></p>

        <p>Hébergeur d’Onylix : Infomaniak
            <br>
            Adresse : Rue Eugène-Marziano 25, 1227, Les Acacias, Genève, Suisse
            <br>
            Téléphone : +41 22 820 35 44
            <br id="cgu">
            Email : manager.infomaniak.com et/ou mail.infomaniak.com
</p>

<p>*Tout litige relatif à l'utilisation de l'application et au site d’Onylix sera soumis exclusivement à l’instance judiciaire de la <strong>Cité Judiciaire de Montbéliard.</strong></p>
<p>Tribunal compétent : Cité Judiciaire - Tribunal judiciaire de Montbéliard
    <br>
    Adresse : Rue Wolfgang Amadeus Mozart, Montbéliard (25200), France
    <br>
    Téléphone : 03 81 90 70 00
    <br>
    Fax : 03 81 90 70 91
    <br>
Email : accueil-montbeliard@justice.fr</p>
    </section>
    <section class="flex flex-col gap-4">
        <h5>CONDITIONS GÉNÉRALES D’UTILISATIONS (CGU)</h5>
        <section class="flex flex-col gap-1">
        <h6>Article 1 – Objet :</h6>
        <p>Les présentes Conditions Générales d'Utilisation ont pour objet de définir les modalités et conditions d'utilisation de notre application Onylix ainsi que des services proposés par celle-ci. Elles encadrent également juridiquement l’utilisation des services du site Onylix. Constituant ainsi le contrat entre la société Onylix, l’Utilisateur, l’accès au site doit être précédé de l’acceptation de ces CGU. L’accès à cette plateforme signifie l’acceptation des présentes CGU.</p>
    </section>
    <section class="flex flex-col gap-1">
        <h6>Article 2 – Acceptation des Conditions :</h6>
        <p>L'utilisation de l'application Onylix implique l'acceptation pleine et entière des présentes Conditions Générales d'Utilisation. Tout utilisateur s'engage à les consulter régulièrement afin de se tenir informé des éventuelles mises à jour qui peuvent arriver à tout moment. (pour en savoir + => Mentions Légales)</p>
    </section>
    <section class="flex flex-col gap-1">
        <h6>Article 3 – Accès au site et aux différents services :</h6>
        <p class="mb-2">Onylix permet d’accéder gratuitement aux services suivants, d’autres services sont payants bien sûr avec l’abonnement premium + :</p>
        <ul class="mb-2"><li>- Journal de rêve</li>
            <li>
            - Écriture de rêve </li>
            <li>
            - Interprétation de rêve avec IA</li>
            <li>
            - Statistiques des rêves- Partage de rêve (anonyme)</li></ul>
        <p>Le site comme l’application est accessible gratuitement depuis n’importe où par tout utilisateur disposant d’un accès à Internet. Tous les frais nécessaires pour l’accès aux services (matériel informatique, connexion Internet…) sont à la charge de l’utilisateur. L’accès aux services s’effectue à l’aide d’un identifiant (pseudonyme) et d’un mot de passe. Pour des raisons de maintenance ou autres, l’accès au site et/ou à l’application peuvent être interrompus ou suspendus par l’éditeur sans préavis ni justification (même si nous essayerons au mieux de prévenir en cas de grosse mise à jour).</p>
    </section>
    <section class="flex flex-col gap-1">
        <h6>Article 4 – Comptes Utilisateurs :</h6>
        <p>Les utilisateurs sont responsables de la confidentialité de leur compte et de leurs identifiants de connexion. Onylix garantit la sécurisation des comptes utilisateurs ainsi que la protection des données personnelles conformément à sa Politique de Protection des Données.</p>
    </section>
    <section class="flex flex-col gap-1">
        <h6>Article 5 – Propriété Intellectuelle :</h6>
        <p class="mb-2">L'ensemble des contenus présents sur l'application Onylix, notamment les textes, images, logos, et bases de données, sont protégés par les lois relatives à la propriété intellectuelle et sont la propriété exclusive d'Onylix SARL ou de ses partenaires.</p>
        <p>La reproduction et la copie des contenus par quiconque requiert une autorisation préalable du site. Dans ce cas, toute utilisation à des usages commerciaux ou à des fins publicitaires est proscrite.</p>
        
    </section>
    <section class="flex flex-col gap-1">
        <h6>Article 6 – Responsabilité :</h6>
        <p>Onylix décline toute responsabilité en cas de dommages directs ou indirects résultant de l'utilisation de l'application. Les utilisateurs sont seuls responsables des contenus qu'ils publient et s'engagent à respecter les règles de bonne conduite définies par Onylix. Nous recommandons de respecter l’anonymat des autres rêveurs et votre propre anonymat également pour permettre une expérience agréable de nos services.</p>
        
    </section>
    <section class="flex flex-col gap-1">
        <h6>Article 7 – Collecte de données :</h6>
        <p class="mb-2">Pour la création du compte utilisateur, la collecte des informations au moment de l’inscription sur le site est nécessaire et obligatoire. Conformément à la loi n°78-17 du 6 janvier relative à l’informatique, aux fichiers et aux libertés, la collecte et le traitement d’informations personnelles s’effectuent dans le respect de la vie privée. Suivant la loi Informatique et Libertés en date du 6 janvier 1978, articles 39 et 40, l’Utilisateur dispose du droit d’accéder, de rectifier, de supprimer et d’opposer ses données personnelles (voir Protection des Données). L’exercice de ce droit s’effectue par :</p>
        <ul class="mb-2"><li>- Le formulaire de contact</li>
            
            <li>- La création du compte</li>
            
            <li>- Abonnement premium +</li></ul>
        
    </section>
    <section class="flex flex-col gap-1">
        <h6>Article 8 – Cookies :</h6>
        <p>L’information présente dans les cookies est utilisée pour améliorer les performances de nos services, en particulier de notre site. En naviguant sur le site, l’utilisateur accepte les cookies ou non. Leur désactivation peut s’effectuer via les paramètres du logiciel de navigation et il peut à tout moment modifier leur traitement. (pour en savoir + => Protection des Données).</p>
        
    </section>
    <section id="pdd" class="flex flex-col gap-1">
        <h6>Article 9 – Durée du contrat :</h6>
        <p>Le présent contrat (CGU) est valable pour une durée indéterminée. Le début de l’utilisation des services du site et/ou de l’application marque le début du contrat à l’égard de l'utilisateur.</p>
        
    </section>
    <section class="flex flex-col gap-1">
        <h6>Article 10 – Droit applicable et juridiction compétente :</h6>
        <p>Le présent contrat est soumis à la législation française. L’absence de résolution à l’amiable des cas de litige entre les parties implique le recours aux tribunaux français compétents pour régler le contentieux (voir Mentions Légales).</p>
        
    </section>
    </section>
    <section class="flex flex-col gap-4">
        <h5>PROTECTION DES DONNÉES</h5>
        <p>Qui sommes-nous et que couvre cette politique ?</p>
        <p>Bonjour ! Nous sommes <strong>Onylix</strong>, une jeune entreprise française basée à Montbéliard (25200) et nous sommes spécialisés dans la création de services sur application mobile. Onylix est un projet que nous réalisons à 3 :</p>
        <p><strong>Mélissa Poilâne</strong>, notre chef de projet et développeur web de renom !</p>
        <p><strong>Romain Grosjean</strong>, l’intrépide chargé de com’.</p>
        <p><strong>Hugo Collin</strong>, notre designer hors pair !</p>
        <p>Et notre objectif est de produire un produit avec de multiples services conçus pour permettre à tout un chacun, que ce soit des jeunes femmes, hommes, ou personnes non-binaires d'écrire et d'<strong>interpréter leurs rêves</strong> via notre application. Notre mission est de redonner espoir à quiconque qui aurait oublié ou perdu ses rêves, grâce à notre application qui est consacrée justement aux rêves et à leur écriture et interprétation via une <strong>intelligence artificielle</strong>, un LLM pour être plus précis, qui est issu des prompts de ChatGPT de l'entreprise OpenAI.</p>
        <p>Dans nos services, nous accordons une grande importance à la protection de votre vie privée. Voici quelques principes fondamentaux que nous partageons avec vous :</p>
        <p>Nous sommes très attentifs aux informations personnelles que nous vous demandons de fournir lors des procédures de paiement (ex : noms, prénoms, adresses…) et à celles que nous recueillons à votre sujet dans le cadre de nos services (pseudonymes, rêves, statistiques…).</p>
        <p>Nous ne conservons les informations personnelles qu'aussi longtemps que nous avons une raison de les garder. La plupart de ces dernières peuvent être de l’ordre de quelques semaines ou mois par rapport aux rêves, mais elle ne dépasse pas 1 an (exception pour les données de comptes et l’enregistrement des rêves). Quoiqu’il en soit elles ne sont pas conservées au-delà de la durée que l’on vous indique.</p>
        <p>Nous visons une transparence totale sur la manière dont nous recueillons, utilisons et partageons vos informations personnelles.</p>
        <p>Nous ne recueillons des informations sur vous que si nous avons une raison de le faire - par exemple, pour fournir nos services, pour communiquer avec vous ou pour améliorer nos services.</p>
        <p>Nous recueillons ces informations à partir de deux principales sources : lorsque vous nous fournissez directement des informations à nos services ou automatiquement par le biais de nos services (qui nécessitent parfois vos informations pour simplement fonctionner).</p>
        <p>*Vous trouverez ci-dessous notre politique de confidentialité en détail, qui intègre et clarifie ces quelques principes. Cette politique de confidentialité s'applique en tout cas principalement aux informations que nous recueillons à votre sujet lorsque vous utilisez notre application et ses services, autrement dit :</p>
        <p>Informations que vous nous fournissez directement
            <br>
            Il n'est probablement pas surprenant que nous recueillions des informations que vous nous fournissez directement. En voici quelques exemples :</p>
            <p>
Informations de base sur le compte : Nous vous demandons des informations de base pour configurer votre compte. Par exemple, nous vous demandons de fournir (via les services de Google Play ou de l’App Store) votre compte utilisateur et votre adresse mail (depuis notre site). Bien sûr, votre mot de passe pour votre compte est également pris en compte, tout comme votre mot de passe et votre pseudonyme en tant qu’utilisateur pour vous identifier. Bien que vous soyez totalement anonyme sur notre plateforme. Nous conservons ces informations pour votre confort, nous ne les partageons évidemment pas.</p>
<p>Informations sur le profil public : Votre compte chez nous apporte quelques informations de base, nous pouvons collecter quelques informations que vous fournissez pour votre profil public, bien que nous n’en faisions pas grand-chose dans ce cas présent. Par exemple lorsque vous affichez des informations via votre personnalisation de profil. N’oubliez pas que l’expérience se veut anonyme et agréable, nous vous déconseillons fortement de mettre toute information pouvant vous compromettre, car mes informations de votre profil public sont justement publiques. Gardez cela à l'esprit lorsque vous décidez des informations que vous souhaitez inclure.</p>
<p>Paiement et coordonnées : Vous pouvez nous fournir des informations de paiement et des coordonnées associées lorsque vous décidez de déverrouiller plus d’options et de fonctionnalités avec un compte premium. Nous collectons bien sûr les informations préalables afin d’appliquer, une fois le paiement effectué, toutes les options proposées à votre compte et rien qu’à vous. Ce sont des informations que nous conservons seulement quelques minutes/heures (le temps d'effectuer la transaction et de l’appliquer correctement au compte) et que nous supprimons assez rapidement pour vous garantir une sécurité sans faille quant au renouvellement ou non de votre abonnement. Vous pouvez d’ailleurs cocher « oui » ou « non » si vous souhaitez que l’on enregistre plus longtemps vos informations afin de garantir un renouvellement tous les mois de votre abonnement. Ainsi votre nom, des informations de votre carte de crédit et des informations de contact (SAV) en cas de problème sont récoltés, mais pas distribués non plus. Le paiement se fait d’ailleurs par PayPal pour vous assurer une sécurité de vos données bancaires sans faille.</p>
<p>Informations sur le contenu : Vous pouvez nous fournir des informations sur vous dans l’écriture de vos rêves. Puisque les rêves sont les reflets de chaque individu, il est logique qu’indirectement sur des rêves relativement personnels vous nous indiquez des données relevant presque de la sphère privée. Ce sont des données qui nous servent uniquement pour optimiser votre expérience lors de l’utilisation de notre application. Prenons un exemple, si vous partagez des rêves relativement tristes ou déprimant, on pourrait en déterminer que vous avez un profil de ce type, ce qui n’est pas obligatoirement le cas bien sûr, mais notre algorithme va déterminer que ça peut être le cas. De plus, dans cette situation vous pourriez clairement ranger vos rêves par catégorie d’affect et d’émotions, mais c’est quelque chose que nous ne partageons en aucun cas et que vous ne pouvez pas faire via l’espace de partage. Les rêves sont anonymisés tout comme vous. Et en aucun cas d’autres utilisateurs peuvent accéder à des rêves que vous avez simplement écrits dans votre espace si vous ne les avez pas partagés avant. Autrement, toutes images, médias, réactions que vous avez effectuées sur notre application sont aussi pris par nos soins, mais pour vous garantir une expérience complète.</p>
<p>Informations d'identification : En plus de votre mot de passe, de votre pseudo, nous vous demandons de vous fournir (facultatif) votre numéro de téléphone et votre adresse mail en cas de problème. Nos services pour l’achat ou pour toute autre question ne conserveront pas vos coordonnées pour une prochaine prise de contact si votre problème a été réglé. Tant que votre problème n’a pas été résolu nous restons en contact avec vous. En cas de maintenance ou de gros problème (fuites de données/hacks) nous vous recommandons de nous suivre tout de même à notre newsletter et à nos réseaux sociaux pour connaître toutes les modalités et la procédure à suivre. Nous comptons tout faire en place pour vous protéger vous et vos données.</p>
<p>(COOKIE) Informations provenant de cookies et d'autres technologies : Un cookie est une chaîne d'informations qu'un site web stocke sur l'ordinateur d'un visiteur et que le navigateur du visiteur fournit au site web à chaque fois que le visiteur revient. Les balises pixel (également appelées pixels invisibles) sont de petits blocs de code placés sur les sites Web et les e-mails. Notre site suivant utilise des cookies et d'autres technologies telles que les pixels invisibles pour nous aider à identifier et à suivre les visiteurs, l'utilisation et les préférences d'accès à nos Services, ainsi que pour suivre et comprendre l'efficacité des campagnes d'e-mailing et proposer du contenu pertinent à nos utilisateurs.</p>
<p>Comment et pourquoi nous utilisons vos informations.
Nous utilisons les informations vous concernant aux fins énumérées ci-dessous :</p>
<p>La fourniture de nos nombreux services et fonctionnalités : Par exemple, pour configurer votre compte, sauvegarder vos rêves, partager avec d’autres utilisateurs, ranger dans des catégories vos expériences, avoir des stats autour des rêves, etc.</p>
<p>
Pour assurer la qualité, maintenir la sécurité et améliorer nos services : En fournissant des mises à jour automatiques et de nouvelles versions de nos services. Ou encore, par exemple, en surveillant et en analysant la façon dont les utilisateurs interagissent avec nos services afin que nous puissions créer de nouvelles fonctionnalités que nous pensons que nos utilisateurs apprécieront plus efficacement ou à rendre nos services plus faciles à utiliser.</p>
<p>Pour placer et gérer des annonces dans le cadre de nos programmations publicitaires : notamment pour placer des publicités sur d’autres sites que peuvent consulter nos utilisateurs et aussi sur notre propre site dans le cadre de notre programme publicitaire, et pour comprendre les performances des publicités.</p>
<p>Pour résoudre les problèmes liés à nos services : Par exemple, en surveillant, déboguant, réparant et prévenant les problèmes.</p>
<p>Pour simplement communiquer avec vous : En vous envoyant par exemple un e-mail pour vous demander votre avis, partager des conseils pour tirer le meilleur parti de nos services et/ou de notre application. Cela peut aussi se passer par un SMS pour vérifier votre paiement ou encore en vous appelant en cas de soucis majeur. Si vous ne souhaitez pas recevoir d'informations de notre part, vous pouvez à tout moment refuser les communications marketing et/ou de services également. Pour cela il suffit d’arrêter de suivre notre newsletter.</p>
<p>Protéger nos services et vous, chers utilisateurs : Par exemple, en détectant les incidents de sécurité et en se protégeant contre les activités malveillantes, trompeuses, frauduleuses ou illégales, en luttant contre le spam, en se conformant à nos obligations légales et en protégeant les droits et la propriété d’Onylix.</p>
<p>Pour commercialiser, mesurer, évaluer et améliorer l'efficacité de notre marketing et de nos services : Via un ciblage des messages marketing auprès des abonnés à notre newsletter et/ou à nos abonnements premium +.</p>
<p>Et enfin, pour personnaliser l'expérience de chaque utilisateur : Avec une personnalisation de votre expérience en vous envoyant des notifications pertinentes, en vous rappelant qu’il vous reste des rêves à interpréter et/ou à ranger.</p>
<p>Vos droits
Onylix attache une grande importance à la protection des données personnelles de ses utilisateurs. Les données collectées sont traitées de manière sécurisée et confidentielle, conformément à la législation en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD).</p>
<p>Si vous vous trouvez dans certaines parties du monde, y compris dans certains États américains et dans des pays qui relèvent du champ d'application du Règlement général européen sur la protection des données (alias le "RGPD"), vous pouvez avoir certains droits concernant vos informations personnelles, comme le droit de demander l'accès à vos données ou leur suppression.</p>
<p>Règlement général européen sur la protection des données (RGPD)
    <br>
Si vous vous trouvez dans un pays qui relève de son champ d'application, les lois sur la protection des données vous confèrent certains droits concernant vos données personnelles, sous réserve des exemptions prévues par la loi, y compris les droits de :</p>
<ul><li>- Demander l'accès à vos données à caractère personnel.</li>
    
<li>- Demander la correction ou la suppression de vos données.</li>

<li>- S'opposer à l'utilisation et au traitement de vos données à caractère personnel.</li>

<li>- De demander que nous limitions l'utilisation et le traitement de vos données.</li>

<li>- Demander la portabilité de vos données.</li></ul>
<p>Vous avez également le droit de déposer une plainte auprès d'une autorité de contrôle gouvernementale. Sachez qu’Onylix respectent vos droits et que vous pouvez à tout moment accédés à vos informations personnelles, les modifiés, les supprimés (partiellement ou totalement en supprimant votre compte), refusé le traitement que l’on peut en faire, nous demander de limiter leurs utilisations ou encore de demander la portabilité de ces dernières.</p>
    </section>

    <h6 class="text-right mb-24">  — Toute l’équipe d’Onylix</h6>
    </div>
</template>
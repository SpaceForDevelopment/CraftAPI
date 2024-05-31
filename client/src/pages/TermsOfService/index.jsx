import { PageTitle } from '../../components/PageTitle';
import { Terms } from '../../components/Terms';

function TermsOfService() {
    return (
        <>
            <PageTitle title="Terms of service" />
            <Terms
                subtitle="Objective"
                content="The API has been developed for educational purposes and should only be used for legal purposes. It provides information about mobs, equipment and ores in the Minecraft game."
            />
            <Terms
                subtitle="License"
                content="CraftAPI is licensed under the terms of the MIT License, which means that you are free to use it for any purpose, whether personal or commercial, free of charge. While attribution to the developer is not obligatory, it is recommended as a good practice."
            />
            <Terms
                subtitle="Restrictions"
                content="Use of the API is subject to certain restrictions, such as the prohibition on disseminating offensive, discriminatory or defamatory content. Furthermore, it is not permitted to impair the performance, security or availability of the API, nor to attempt to circumvent security measures. Sub-licensing or transfer of access rights to third parties is not permitted."
            />
            <Terms
                subtitle="Property"
                content="CraftAPI is owned and maintained by Artur Bomtempo and Letícia França. All rights not expressly granted in these terms are reserved by the developers. The developers reserve the right to modify or terminate access to the API at any time and assume no liability for direct or indirect damages arising from the use of the API."
            />
            <Terms
                subtitle="Contact"
                content="If you have any questions related to these Terms of Service, please feel free to contact us via email at arturbcolen@gmail.com."
            />
            <br />
            <br />
        </>
    );
}

export default TermsOfService;

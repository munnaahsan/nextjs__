import { useRouter } from "next/router";
import  Link  from 'next/link';
import { Fragment } from "react";



function DetailsPage() {

    const  router = useRouter();
    console.log(router.query);
    return <Fragment>
        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <ul>
            <li>
                <Link href='/news/jakisu'>Next Link</Link>
            </li>
        </ul>
    </Fragment>;
}

export default DetailsPage;
import React, {Component} from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
const folder_id = '5a7fae846983f300134ff0d0';
let variables = { id: folder_id };
let query = `
query API($id: ID!) {
  Folder(id: $id) {
    id
    name
  }
}
`;
export default class Class extends Component {
    static async getInitialProps () {
        const response = await fetch(`${process.env.TIPE_REST_URL}folder/5a7fae846983f300134ff0d0`, {
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${process.env.TIPE_API_KEY}`,
              'Tipe-Id': `${process.env.TIPE_API_SECRET}`
            }
          });
        const data = await response.json();
        const parsed = await data;

        let custom = 'custom data!';
        return { custom, parsed };
    }
    render () {

        const { custom, parsed } = this.props;
        const { documents } = parsed;
        console.log(this.props.parsed.documents.map(x => x));
        return (
            <div className="class-name">
                <h2>{custom}</h2>
                {
                    documents.map(x => {
                       return <h3 key={x.id}>
                       <Link href={`/post?id=${x.id}`} as={`/blog/${x.id}`}>
                       {x.name}
                       </Link></h3>;
                    })
                }
            </div>
        );
    }
}

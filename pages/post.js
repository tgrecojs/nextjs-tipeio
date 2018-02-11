import ReactMarkdown from 'react-remarkable';
import 'isomorphic-fetch';

const Post = (props) =>
    <div>
     <h3>Conteeent</h3>
     <ReactMarkdown source={props.post} />
    </div>;

Post.getInitialProps = async ({ query: { id }}) => {
  const response = await fetch(`${process.env.TIPE_REST_URL}/document/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${process.env.TIPE_API_KEY}`,
      'Tipe-Id': `${process.env.TIPE_API_SECRET}`
    }
  });
    const data = await response.json();
    const { blocks } = data;
    const post = blocks.map(x => x.value);
    return { post: post[0] };
};

export default Post;

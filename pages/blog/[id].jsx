import { client } from '../../libs/client';

const PostPage = ({ post }) => {
	return (
		<main>
			<h1>{post.title}</h1>
			<div
				dangerouslySetInnerHTML={{
					__html: `${post.body}`,
				}}
			/>
			<p>{post.publishedAt}</p>
		</main>
	);
};

export const getStaticPaths = async () => {
	const data = await client.get({ endpoint: 'blog' });

	return {
		paths: data.contents.map((post) => ({ params: { id: post.id } })),
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const data = await client.get({ endpoint: 'blog', contentId: params.id });

	return {
		props: {
			post: data,
		},
	};
};

export default PostPage;

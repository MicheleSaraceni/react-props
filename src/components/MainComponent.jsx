import CardComponent from "./CardComponent.jsx";
import posts from "../data/posts.js";

function MainComponent() {
    const postslist = [...posts];
    return (
        <main className="container">
            <div className="row gy-4">
                {postslist.map((post) => (
                    <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                        <CardComponent
                            image={post.image}
                            title={post.title}
                            content={"Content: " + post.content}
                            tags={post.tags.join(", ")}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}

export default MainComponent;
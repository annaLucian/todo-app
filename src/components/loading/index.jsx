import ContentLoader from "react-content-loader"
import './Loading.css'
const Loading = (props) => {
    return (
        <div className="container-loading">
            <ContentLoader
                speed={2}
                width={614}
                height="auto"
                viewBox="0 0 614 469"
                backgroundColor="rgb(250,250,250)"
                foregroundColor="rgb(200,199,199)"
                backgroundOpacity={.5}
                {...props}
            >

                <rect x="0" y="0" rx="10" ry="10" width="614" height="40" />
                <rect x="calc(50% - 263px)" y="110" rx="3" ry="3" width="526" height="75" className="todo-esqueleton" />
                <rect x="calc(50% - 263px)" y="200" rx="3" ry="3" width="526" height="75" className="todo-esqueleton" />
                <rect x="calc(50% - 263px)" y="290" rx="3" ry="3" width="526" height="75" className="todo-esqueleton" />
                <rect x="calc(50% - 40.5px)" y="430" rx="5" ry="5" width="100" height="39" id="boton" />
            </ContentLoader>

        </div>

    )
}
export { Loading }
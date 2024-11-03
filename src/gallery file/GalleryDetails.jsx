

const GalleryDetails = ({query}) => {
     
    const { image, name, title, para } = query

    return (
        <div>

            <article className="flex flex-col bg-white border-[1px] border-black">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src={image} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400 the "> {name} </a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug the "> {title} </h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
            
        </div>
    );
};

export default GalleryDetails;
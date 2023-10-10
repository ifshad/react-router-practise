

const Card = ({ card }) => {
    const { albumId, id, title, url, thumbnailUrl } = card;
    // console.log(card)
    return (
        <div className="border-2 border-green-400 rounded-lg p-4">
            <div className="flex gap-2">
                <img src={thumbnailUrl} alt="" className="w-10" />
                <h2 className="font-bold text-xl">{title}</h2>
            </div>
            <p>ID: {id}</p>
            <p>Album ID: {albumId}</p>
            <img src={url} alt="" />
        </div>
    );
};

export default Card;
function ProfileCard({title, handle}) {
    return (
        <div>
            <img style={{width: '150px'}} src="https://play-lh.googleusercontent.com/X24ol80nJS3F_nUg3HlqWWzSxEnDHeAI34quN8rTjILQOoebd0Be3ZFBQrKAtMX2XyE" />
            <h3>{title}</h3>
            <p>{handle}</p>
        </div>
    );
}

export default ProfileCard;
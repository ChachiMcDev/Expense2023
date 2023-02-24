const Footer = () => {

    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Footer</strong> yup <button onClick={() => console.log('going nowhere')}>This link goes nowhere</button>. Irrelevant Information
                    <button onClick={() => console.log('going nowhere')}>CCN</button>. Other irrelevant Information
                    <button onClick={() => console.log('going nowhere')}>Link to the void</button>.
                </p>
            </div>
        </footer>
    )
}

export default Footer
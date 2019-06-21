class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-h1">Random Adinkra Generator</h1>
                <Adinkra />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
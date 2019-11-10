/**
 * Created by PyCharm on 11/5/19
 * @author richard.garcialira
 */

/**
 * GistContainer Component
 *
 * @parent Root Component
 */
var GistContainer = React.createClass({
    getInitialState: function() {
        return {
            // Gists are retrieved by GitHub API and pushed to gists state
            gists: []
        };
    },
    addGist: function(username) {
        let userGistURL = `https://api.github.com/users/${username}/gists`;

        $.get(userGistURL, function(response) {
            let username = response[0].owner.login,
                url = response[0].html_url,
                gists = this.state.gists.concat({ username, url});

            this.setState({ gists });
        }.bind(this));
    },
    render: function() {
        var gistInstance = function(gist) {
            return <Gist username={gist.username} url={gist.url} />
        };

        return (
            <div className="container">
                <h1>Gist Box</h1>

                <GistUserAddForm onAdd={this.addGist} />

                <h2>Latest User Gist's</h2>

                { this.state.gists.map(gistInstance) }
            </div>
        );
    }
});

React.render(<GistContainer />, document.querySelector('#app'));

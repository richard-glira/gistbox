/**
 * Created by PyCharm on 11/5/19
 * @author richard.garcialira
 */

/**
 * GistUserAddForm Component
 *
 * @parent <GistContainer />
 */
var GistUserAddForm = React.createClass({
    getInitialState: function() {
        return {
            username: ''
        };
    },
    onChange: function(event) {
        this.setState({ username: event.target.value });
    },
    addGist: function(event) {
        event.preventDefault();
        this.props.onAdd(this.state.username);
        this.setState({ username: '' });
    },
    render: function() {
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.addGist}>
                    <label for="github-user">Type a GitHub Username to fetch a direct link to their latest gist...</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input className="form-control w-25" id="github-user" value={this.state.username} onChange={this.onChange} type="text" placeholder="yyx990803 (Evan You, Vue.js Creator)..." />
                    </div>
                    <div>
                        <button className="btn btn-primary mb-3">Fetch Latest Gist</button>
                    </div>
                </form>
            </div>
        );
    }
});

/**
 * Created by PyCharm on 11/5/19
 * @author richard.garcialira
 */

/**
 * Gist Component
 *
 * @param username: Username returned from GitHub Gist API
 * @param url: Url HTML link returned from GitHub Gist API
 *
 * @parent <GistContainer />
 */
var Gist = React.createClass({
    render: function() {
        return (
            <div className="form-control mt-3">
                {this.props.username}'s last Gist is <a href={this.props.url} target="_blank">here</a>
            </div>
        );
    }
});

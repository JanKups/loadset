var DATALIST = React.createClass({displayName: 'DATALIST',
            render: function() {

              var data = this.props.data;

              var rows = data.map(function(datum) {
                var clickHandler = function(ev){
                    console.log("Still in reactJs");
                    console.log(ev);
                }

                return (
                  React.DOM.tr( {onClick:clickHandler},
                    React.DOM.td(null, datum['0']),
                    React.DOM.td(null, datum['1']),
                    React.DOM.td(null, datum['2']),
                    React.DOM.td(null, datum['3']),
                    React.DOM.td(null, datum['4']),
                    React.DOM.td(null, datum['6']),
                    React.DOM.td(null, datum['7']),
                    React.DOM.td(null, datum['8']),
                    React.DOM.td(null, datum['9']),
                    React.DOM.td(null, datum['10']),
                    React.DOM.td(null, datum['11'])
                  )
                );
              });

              return (
                React.DOM.table(null,
                  rows
                )
              );
            }
        });
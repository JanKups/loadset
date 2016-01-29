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
                    React.DOM.td(null, datum['12']),
                    React.DOM.td(null, datum['13']),
                    React.DOM.td(null, datum['14']),
                    React.DOM.td(null, datum['15']),
                    React.DOM.td(null, datum['16']),
                    React.DOM.td(null, datum['17']),
                    React.DOM.td(null, datum['18']),
                    React.DOM.td(null, datum['19']),
                    React.DOM.td(null, datum['20']),
                    React.DOM.td(null, datum['21']),
                    React.DOM.td(null, datum['22']),
                    React.DOM.td(null, datum['23']),
                    React.DOM.td(null, datum['24']),
                    React.DOM.td(null, datum['25']),
                    React.DOM.td(null, datum['26']),
                    React.DOM.td(null, datum['27']),
                    React.DOM.td(null, datum['28']),
                    React.DOM.td(null, datum['29']),
                    React.DOM.td(null, datum['30']),
                    React.DOM.td(null, datum['31']),
                    React.DOM.td(null, datum['32']),
                    React.DOM.td(null, datum['33']),
                    React.DOM.td(null, datum['34'])
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
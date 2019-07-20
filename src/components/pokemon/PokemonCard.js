import React, { Component } from 'react';
import styled from 'styled-components';

const Sprite = styled.img`
  width: 8em;
  height: 8em;
  display: none;
`;

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false
    };
    
    componentDidMount() {
        const { name, url } = this.props;
    
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        // const imageUrl = `./sprites/pokemon/${pokemonIndex}.png`;
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    
        this.setState({ name, imageUrl, pokemonIndex });
    }

    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <h5 className="card-header">
                        {this.state.pokemonIndex}
                    </h5>
                    <Sprite
                        className="card-img-top rounded mx-auto mt-2"
                        src={this.state.imageUrl}
                        onLoad={() => this.setState({ imageLoading: false })}
                        onError={() => this.setState({ toManyRequests: true })}
                        style={
                            this.state.toManyRequests
                              ? { display: 'none' }
                              : this.state.imageLoading
                              ? null
                              : { display: 'block' }
                        }
                    />

                    <div className="card-body mx-auto">
                        <h6 className="card-title">
                            {this.state.name
                            .toLowerCase()
                            .split(' ')
                            .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                            .join(' ')}
                        </h6>
                    </div>
                </div>
                
            </div>
        );
    }
}

import React, {Component} from 'react';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className='ui-toolbar fixed flat elevate-on-scroll primary elevate-on-s960 size-2x blue-grey500'>
                    <img src="https://avatars2.githubusercontent.com/u/25529764?s=200&v=4" className='logo'/>
                    <div className='title'>Demo</div>
                </div>

                <div class="ui-s960">
                    <div className='ui-card elevate-on-toolbar'>

                        <div className='ui-toolbar flat white500'>
                            <div className='ui-button flat icon'>
                                <i className='material-icons'>arrow_back</i>
                            </div>

                            <div className='title'>Botões Demo2</div>
                        </div>


                        <div className='ui-card-title'>Teste</div>
                        <div className='ui-card-content'>
                            Teste

                            <div className='ui-button-container'>
                                <button className='ui-button'>Test</button>
                                <button className='ui-button' disabled>Test</button>
                                <button className='ui-button primary'>Test</button>
                                <button className='ui-button accent'>Test</button>
                                <button className='ui-button success'>Test</button>
                                <button className='ui-button warning'>Test</button>
                                <button className='ui-button error'>Test</button>
                            </div>
                            <div className='ui-button-container'>
                                <button className='ui-button'>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                                <button className='ui-button' disabled>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                                <button className='ui-button primary'>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                                <button className='ui-button accent'>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                                <button className='ui-button success'>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                                <button className='ui-button warning'>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                                <button className='ui-button error'>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                            </div>
                            <div className='ui-button-container'>
                                <button className='ui-button raised'>Test</button>
                                <button className='ui-button raised' disabled>Test</button>
                                <button className='ui-button raised primary'>Test</button>
                                <button className='ui-button raised accent'>Test</button>
                                <button className='ui-button raised success'>Test</button>
                                <button className='ui-button raised warning'>Test</button>
                                <button className='ui-button raised error'>Test</button>
                            </div>
                            <div className='ui-button-container'>
                                <button className='ui-button outline'>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                                <button className='ui-button outline' disabled>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                                <button className='ui-button outline primary'>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                                <button className='ui-button outline accent'>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                                <button className='ui-button outline success'>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                                <button className='ui-button outline warning'>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                                <button className='ui-button outline error'>
                                    <i className="material-icons">add</i>
                                    Add
                                </button>
                            </div>
                            <div className='ui-button-container'>
                                <button className='ui-button flat'> Add</button>
                                <button className='ui-button flat' disabled>Add</button>
                                <button className='ui-button flat primary'>Test</button>
                                <button className='ui-button flat accent'>Test</button>
                                <button className='ui-button flat success'>Test</button>
                                <button className='ui-button flat warning'>Test</button>
                                <button className='ui-button flat error'>Test</button>
                            </div>
                            <div className='ui-button-container'>
                                <button className='ui-button fab'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button fab' disabled>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button primary fab'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button accent fab'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button success fab'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button warning fab'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button error fab'>
                                    <i className="material-icons">add</i>
                                </button>
                            </div>
                            <div className='ui-button-container'>
                                <button className='ui-button fab mini'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button fab mini' disabled>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button primary fab mini'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button accent fab mini'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button success fab mini'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button warning fab mini'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button error fab mini'>
                                    <i className="material-icons">add</i>
                                </button>
                            </div>
                            <div className='ui-button-container'>
                                <button className='ui-button icon'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button icon' disabled>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button primary icon'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button accent icon'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button success icon'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button warning icon'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button error icon'>
                                    <i className="material-icons">add</i>
                                </button>
                            </div>
                            <div className='ui-button-container'>
                                <button className='ui-button icon square'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button icon square' disabled>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button primary icon square'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button accent icon square'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button success icon square'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button warning icon square'>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className='ui-button error icon square'>
                                    <i className="material-icons">add</i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;

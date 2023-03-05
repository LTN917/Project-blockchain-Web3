import React,{Component} from 'react';
import Layout from '../../components/Layout';
import { Form,Button,Input,Message } from "semantic-ui-react";
import factory from "../factory";
import web3 from '../web3';
import {Link,Router} from '../../routes';

class CampaignNew extends Component{
    state = {
        miniContribution:'',
        errorMessage:'',
        loading: false
    };

    onSubmit = async (e)=>{   
        e.preventDefault();

        this.setState({loading:true});

        try{
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(this.state.miniContribution)
                .send({
                    from: accounts[0]
            });
            Router.pushRoute('/');
        }catch(err){
            this.setState({errorMessage: err.message})
        }

        this.setState({loading:false});
    };

    render(){      
        return(
            <Layout>
                <h3>Create a Campaigns!</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label='wei'
                            labelPosition='right'
                            value={this.state.miniContribution}
                            onChange={e => this.setState({miniContribution:e.target.value})}
                        />
                    </Form.Field>
                    <Message error negative>
                        <Message.Header>Oops!</Message.Header>
                        <p>{this.state.errorMessage}</p>
                    </Message>
                    <Button loading={this.state.loading} primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;
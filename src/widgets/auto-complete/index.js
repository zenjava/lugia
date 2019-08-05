import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import AUTOCOMPLETE from '@lugia/lugia-web/dist/auto-complete/lugia.auto-complete.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const DefaultAutoComplete =  require('./DefaultAutoComplete').default;  const ShowOldValueAutoComplete =  require('./ShowOldValueAutoComplete').default;  const EmailAutoComplete =  require('./EmailAutoComplete').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev} = this.props;
                return(
                    <Row>
                        <Col span={20}>
                          <div style={{paddingRight: '50px'}}>
                              <Title title={'自动完成'} subTitle={'AutoComplete'} desc={'需要自动完成数据时使用'} />
                              <Demo title={'基本用法'} titleID={'auto-complete-0'} code={<code>{ `/**
                              <EditTables dataSource={AUTOCOMPLETE} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#auto-complete-0'} /><Link title={'记录上一次选中值'} href={'#auto-complete-1'} /><Link title={'Email后置补全'} href={'#auto-complete-2'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         });   
        
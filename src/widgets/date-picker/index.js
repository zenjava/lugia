import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import DATEPICKER from '@lugia/lugia-web/dist/date-picker/lugia.date-picker.zh-CN.json'; import MONTH from '@lugia/lugia-web/dist/date-picker/lugia.month.zh-CN.json'; import YEAR from '@lugia/lugia-web/dist/date-picker/lugia.year.zh-CN.json'; import WEEK from '@lugia/lugia-web/dist/date-picker/lugia.week.zh-CN.json'; import WEEKS from '@lugia/lugia-web/dist/date-picker/lugia.weeks.zh-CN.json'; import RANGE from '@lugia/lugia-web/dist/date-picker/lugia.range.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseDemo =  require('./BaseDemo').default;  const FormatDemo =  require('./FormatDemo').default;  const StepDemo =  require('./StepDemo').default;  const ControlledDemo =  require('./ControlledDemo').default;  const TimeDateDemo =  require('./TimeDateDemo').default;  const DisabledDemo =  require('./DisabledDemo').default;  const PresetRangeDemo =  require('./PresetRangeDemo').default;  const ExtraFooterDemo =  require('./ExtraFooterDemo').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev} = this.props;
                return(
                    <Row>
                        <Col span={20}>
                          <div style={{paddingRight: '50px'}}>
                              <Title title={'日期选择器'} subTitle={'DatePicker'} desc={'用于日期选择'} />
                              <Demo title={'基本'} titleID={'date-picker-0'} code={<code>{ `
\nimport React from \'react\';
\nimport { DatePicker } from \'@lugia/lugia-web\';
\nimport styled from \'styled-components\';
\nconst {YearPicker,MonthPicker,WeekPicker,WeeksPicker,RangePicker} =DatePicker;
\nexport const DemoItem=styled.span\`
\n  display:inline-block;
\n  padding:0 20px 20px 0;
\n\`;
\nexport default class BaseDemo extends React.Component {
\n  render() {
\n    return  <React.Fragment>
\n              <DemoItem>
\n                <DatePicker showToday selectToday placeholder={\'选择日期\'}/>
\n              </DemoItem>
\n              <DemoItem>
\n                <YearPicker placeholder={\'选择年\'}/>
\n              </DemoItem>
\n              <DemoItem>
\n                <MonthPicker placeholder={\'选择月份\'}/>
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <WeekPicker placeholder={\'选择周\'}/>
\n              </DemoItem>
\n              <DemoItem>
\n                <WeeksPicker placeholder={\'选择周\'}/>
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <RangePicker placeholder={[\'开始日期\',\'结束日期\']}/>
\n              </DemoItem>
\n            </React.Fragment> ;
\n  }
\n}
\n`}</code>} desc={'日期组件基本用法'}  demo={<BaseDemo />}></Demo><Demo title={'日期格式'} titleID={'date-picker-1'} code={<code>{ `import React from \'react\';
\nimport { DatePicker } from \'@lugia/lugia-web\';
\nimport styled from \'styled-components\';
\nconst {YearPicker,MonthPicker,WeekPicker,WeeksPicker,RangePicker} =DatePicker;
\nexport const DemoItem=styled.span\`
\n  display:inline-block;
\n  padding:0 20px 20px 0;
\n\`;
\nexport default class BaseDemo extends React.Component {
\n  render() {
\n    return  <React.Fragment>
\n              <DemoItem>
\n                <DatePicker defaultValue={\'2019-01-01\'} format={\'YYYY-MM-DD\'}/>
\n              </DemoItem>  
\n              <DemoItem>
\n                <YearPicker defaultValue={\'2019\'} format={\'YYYY\'}/>
\n              </DemoItem>
\n              <DemoItem>
\n                <MonthPicker defaultValue={\'2019-01\'} format={\'YYYY-MM\'}/>
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <WeekPicker defaultValue={\'2019-01\'} format={\'YYYY-WW\'}/>
\n              </DemoItem>
\n              <DemoItem>
\n                <WeeksPicker defaultValue={\'2019-01\'} format={\'YYYY-WW\'}/>
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <RangePicker defaultValue={[\'2019-01-01\',\'2019-02-01\']} format={\'YYYY-MM-DD\'}/>
\n              </DemoItem>       
\n            </React.Fragment> ;
\n  }
\n}
\n`}</code>} desc={'使用format指定日期格式'}  demo={<FormatDemo />}></Demo><Demo title={'步长'} titleID={'date-picker-2'} code={<code>{ `
\nimport React from \'react\';
\nimport { DatePicker } from \'@lugia/lugia-web\';
\nimport styled from \'styled-components\';
\nconst {YearPicker,WeekPicker,WeeksPicker,RangePicker} =DatePicker;
\nexport const DemoItem=styled.span\`
\n  display:inline-block;
\n  padding:0 20px 20px 0;
\n\`;
\nexport default class BaseDemo extends React.Component {
\n  render() {
\n    return  <React.Fragment>
\n              <DemoItem>
\n                <DatePicker step={9} placeholder={\'选择日期\'}/>
\n              </DemoItem>
\n              <DemoItem>
\n                <YearPicker step={9} placeholder={\'选择年\'}/>
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <WeekPicker step={9} placeholder={\'选择周\'}/>
\n              </DemoItem>
\n              <DemoItem>
\n                <WeeksPicker step={9} placeholder={\'选择周\'}/>
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <RangePicker step={9} placeholder={[\'开始日期\',\'结束日期\']}/>
\n              </DemoItem>
\n            </React.Fragment> ;
\n  }
\n}
\n`}</code>} desc={'使用step 可以设置 周 和 年 面板的显示步长'}  demo={<StepDemo />}></Demo><Demo title={'受控组件'} titleID={'date-picker-3'} code={<code>{ `
\nimport React from \'react\';
\nimport { DatePicker } from \'@lugia/lugia-web\';
\nimport styled from \'styled-components\';
\nconst {RangePicker} =DatePicker;
\nexport const DemoItem=styled.span\`
\n  display:inline-block;
\n  padding:0 20px 20px 0;
\n\`;
\nexport default class BaseDemo extends React.Component {
\n  constructor(props) {
\n    super(props);
\n    this.state = { dateValue:\'2019-01-01\',rangeValue:[\'2019-01-01\',\'2019-02-20\']};
\n  }
\n  onChange=obj => {
\n    const {newValue}=obj;
\n    this.setState({dateValue:newValue});
\n  }
\n  rangeChange=obj => {
\n    const {newValue}=obj;
\n    this.setState({rangeValue:newValue});
\n  }
\n  render() {
\n    return  <React.Fragment>
\n              <DemoItem>
\n                <DatePicker value={this.state.dateValue} format={\'YYYY-MM-DD\'} onChange={this.onChange}/>
\n              </DemoItem>
\n              <br/>
\n              <DemoItem><RangePicker value={this.state.rangeValue} format={\'YYYY-MM-DD\'} onChange={this.rangeChange}/></DemoItem>
\n            </React.Fragment> ;
\n  }
\n}
\n`}</code>} desc={'需要value 和 onChange 配合使用'}  demo={<ControlledDemo />}></Demo><Demo title={'日期时间选择'} titleID={'date-picker-4'} code={<code>{ `
\nimport React from \'react\';
\nimport { DatePicker } from \'@lugia/lugia-web\';
\nimport styled from \'styled-components\';
\nconst {RangePicker} =DatePicker;
\nexport const DemoItem=styled.span\`
\n  display:inline-block;
\n  padding:0 20px 20px 0;
\n\`;
\nexport default class BaseDemo extends React.Component {
\n  render() {
\n    return  <React.Fragment>
\n              <DemoItem>
\n                <DatePicker showTime format={\'YYYY-MM-DD HH:mm:ss\'} placeholder={\'选择时间\'} />
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <RangePicker showTime format={\'YYYY-MM-DD HH:mm:ss\'} placeholder={[\'开始时间\',\'结束时间\']}/>
\n              </DemoItem>
\n            </React.Fragment> ;
\n  }
\n}
\n`}</code>} desc={'通过showTime属性，为组件内部创建TimePicker,使得日期组件可以选择时间'}  demo={<TimeDateDemo />}></Demo><Demo title={'禁用'} titleID={'date-picker-5'} code={<code>{ `
\nimport React from \'react\';
\nimport { DatePicker } from \'@lugia/lugia-web\';
\nimport styled from \'styled-components\';
\nexport const DemoItem=styled.span\`
\n  display:inline-block;
\n  padding:0 20px 20px 0;
\n\`;
\nconst {YearPicker,MonthPicker,WeekPicker,WeeksPicker,RangePicker} =DatePicker;
\nexport default class BaseDemo extends React.Component {
\n  render() {
\n    return  <React.Fragment>
\n              <DemoItem>
\n                <DatePicker defaultValue={\'2019-01-01\'} disabled/>
\n              </DemoItem>
\n              <DemoItem>
\n                <YearPicker defaultValue={\'2019\'} disabled/>
\n              </DemoItem>
\n              <DemoItem>
\n                <MonthPicker defaultValue={\'2019-01\'} disabled/>
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <WeekPicker defaultValue={\'2019-01\'} disabled/>
\n              </DemoItem>
\n              <DemoItem>
\n                <WeeksPicker defaultValue={\'2019-01\'} disabled/>
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <RangePicker defaultValue={[\'2019-01-01\',\'2019-02-03\']} disabled/>
\n              </DemoItem>
\n            </React.Fragment> ;
\n  }
\n}
\n`}</code>} desc={'disabled 属性，组件为不可用状态'}  demo={<DisabledDemo />}></Demo><Demo title={'预设日期'} titleID={'date-picker-6'} code={<code>{ `
\nimport React from \'react\';
\nimport moment from \'moment\';
\nimport { DatePicker } from \'@lugia/lugia-web\';
\nimport styled from \'styled-components\';
\nconst {RangePicker} =DatePicker;
\nexport const DemoItem=styled.span\`
\n  display:inline-block;
\n  padding:0 20px 20px 0;
\n\`;
\nexport default class BaseDemo extends React.Component {
\n  
\n  render() {
\n    const formatOne =\'YYYY-MM-DD\';
\n    const formatTwo=\'YYYY/MM/DD HH:mm:ss\';
\n    return  <React.Fragment>
\n              <DemoItem>
\n                <DatePicker  format={formatOne} placeholder={\'选择时间\'}
\n                  buttonOptions={{
\n                    options:{
\n                      today:moment().format(formatOne),
\n                      firstDayMonth:moment().startOf(\'month\').format(formatOne)
\n                    }
\n                  }} 
\n                />
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <RangePicker
\n                format={formatOne} 
\n                buttonOptions={{
\n                  options:{
\n                    today:[moment().format(formatOne),moment().format(formatOne)],
\n                    \'this month\':[moment().startOf(\'month\').format(formatOne),moment().endOf(\'month\').format(formatOne)]
\n                  }
\n                }} 
\n                 placeholder={[\'开始时间\',\'结束时间\']}/>
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <RangePicker
\n                format={formatTwo} 
\n                showTime
\n                buttonOptions={{
\n                  options:{
\n                    today:[moment().format(formatTwo),moment().format(formatTwo)],
\n                    \'this month\':[moment().startOf(\'month\').format(formatTwo),moment().endOf(\'month\').format(formatTwo)]
\n                  }
\n                }} 
\n                 placeholder={[\'开始时间\',\'结束时间\']}/>
\n              </DemoItem>
\n            </React.Fragment> ;
\n  }
\n}
\n`}</code>} desc={'可以设置常用日期，以提高用户体验'}  demo={<PresetRangeDemo />}></Demo><Demo title={'页脚'} titleID={'date-picker-7'} code={<code>{ `
\nimport React from \'react\';
\nimport { DatePicker } from \'@lugia/lugia-web\';
\nimport styled from \'styled-components\';
\nconst {YearPicker,MonthPicker,WeekPicker,WeeksPicker,RangePicker} =DatePicker;
\nexport const DemoItem=styled.span\`
\n  display:inline-block;
\n  padding:0 20px 20px 0;
\n\`;
\nexport default class BaseDemo extends React.Component {
\n  render() {
\n    return  <React.Fragment>
\n              <DemoItem>
\n                <DatePicker extraFooter={{message:\'extraFooter\',style:{color:\'red\'}}}/>
\n              </DemoItem>
\n              <DemoItem>
\n                <YearPicker extraFooter={{message:\'extraFooter\',style:{color:\'red\'}}} placeholder={\'选择年\'}/>
\n              </DemoItem>
\n              <DemoItem>
\n                <MonthPicker extraFooter={{message:\'extraFooter\',style:{color:\'red\'}}} placeholder={\'选择月份\'}/>
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <WeekPicker extraFooter={{message:\'extraFooter\',style:{color:\'red\'}}} placeholder={\'选择周\'}/>
\n              </DemoItem>
\n              <DemoItem>
\n                <WeeksPicker extraFooter={{message:\'extraFooter\',style:{color:\'red\'}}} placeholder={\'选择周\'}/>
\n              </DemoItem>
\n              <br/>
\n              <DemoItem>
\n                <RangePicker extraFooter={{message:\'extraFooter\',style:{color:\'red\'}}} placeholder={[\'开始日期\',\'结束日期\']}/>
\n              </DemoItem>
\n            </React.Fragment> ;
\n  }
\n}
\n`}</code>} desc={'在面板中添加页脚,可以用来定制某些信息'}  demo={<ExtraFooterDemo />}></Demo>
                              <EditTables dataSource={DATEPICKER} /><EditTables dataSource={MONTH} /><EditTables dataSource={YEAR} /><EditTables dataSource={WEEK} /><EditTables dataSource={WEEKS} /><EditTables dataSource={RANGE} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本'} href={'#date-picker-0'} /><Link title={'日期格式'} href={'#date-picker-1'} /><Link title={'步长'} href={'#date-picker-2'} /><Link title={'受控组件'} href={'#date-picker-3'} /><Link title={'日期时间选择'} href={'#date-picker-4'} /><Link title={'禁用'} href={'#date-picker-5'} /><Link title={'预设日期'} href={'#date-picker-6'} /><Link title={'页脚'} href={'#date-picker-7'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         });   

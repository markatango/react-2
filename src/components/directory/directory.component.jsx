import React from 'react';
import './directory.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectoryItems } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

class Directory extends React.Component {

  /* componentDidMount(props){
    this.props.fetchShopData();
    
  };
 */
  render(){
    // console.log(this.props.sections);
    return(
      <div className='directory-menu'>
          {
              /* this.state.sections.map( ({ title, imageUrl, id, size, history}) => (
                  <MenuItem title={title} imageUrl={imageUrl} key={id} size={size}></MenuItem>
                  ) */
              this.props.sections.map( ({ id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}></MenuItem>
                )
              )
          }
      </div>
    )
  }
}

/* const  Directory = ({ sections }) =>  {
  return(
    <div className='directory-menu'>
        {
            /* this.state.sections.map( ({ title, imageUrl, id, size, history}) => (
                <MenuItem title={title} imageUrl={imageUrl} key={id} size={size}></MenuItem>
                ) */
/*            sections.map( ({ id, ...otherSectionProps}) => (
              <MenuItem key={id} {...otherSectionProps}></MenuItem>
              )
            )
        }
    </div>
)} */

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryItems
})

/* const mapDispatchToProps = dispatch => ({
  fetchShopData: () => dispatch(fetchShopData())
}); */

export default connect(mapStateToProps)(Directory);
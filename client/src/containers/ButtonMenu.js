import { connect } from 'react-redux'
import { getContentfulFeed, getCraigslistFeed, getInstagramFeed, getTwitterFeed } from '../actions'
import ButtonMenu from '../components/ButtonMenu'

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickContentful: () => dispatch(getContentfulFeed()),
    onClickCraigslist: () => dispatch(getCraigslistFeed()),
    onClickInstagram: () => dispatch(getInstagramFeed()),
    onClickTwitter: () => dispatch(getTwitterFeed())
  }
}

const Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonMenu)

export default Button

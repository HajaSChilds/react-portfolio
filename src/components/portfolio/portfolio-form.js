import React, { Component } from 'react';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';

import '../../../node_modules/react-dropzone-component/styles/filepicker.css';
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";



 
export default class PortfolioForm extends Component {
  constructor(props) {
    super(props); 

    

    this.state = {
      name: '',
      description: '',
      category: 'Business',
      position: '',
      url: '',
      thumb_image_url: '',
      banner_image: '',
      logo: '',
      editMode: false,
      apiUrl: "https://hajasc.devcamp.space/portfolio/portfolio_items",
      apiAction: 'post'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleThumbDrop = this.handleThumbDrop.bind(this);
    this.handleBannerDrop = this.handleBannerDrop.bind(this);
    this.handleLogoDrop = this.handleLogoDrop.bind(this);
    this.deleteImage = this.deleteImage.bind(this);

    this.thumbRef = React.createRef();
    this.bannerRef = React.createRef();
    this.logoRef = React.createRef();

  }

  deleteImage(imageType) {
    axios.delete(`https://hajasc.devcamp.space/portfolio/delete-portfolio-image/${this.state.id}?image_type=${imageType}`, { withCredentials: true }
    ).then(response => {
      this.setState({ [`${imageType}_url`] : "" });
    }).catch(error => {
      console.log("deleteImageError", error);
    })
  }


  componentDidUpdate() {
    if (Object.keys(this.props.portfolioToEdit).length > 0) {
      const {
        id,
        name,
        description,
        category,
        position,
        url,
        thumb_image_url,
        banner_image_url,
        logo_url
      } = this.props.portfolioToEdit;

      this.props.clearPortfolioToEdit();

      this.setState({
        id: id,
        name: name || '',
        description: description || '',
        category: category || 'Business',
        position: position || '',
        url: url || '',
        editMode: true,
        apiUrl: `https://hajasc.devcamp.space/portfolio/portfolio_items/${id}`,
        apiAction: 'patch',
        thumb_image_url: thumb_image_url || '',
        banner_image_url: banner_image_url || '',
        logo_url: logo_url || ''
      });

          
    }
  }

  handleThumbDrop() {
    return {
      addedfile: (file) => this.setState({thumb_image_url: file}),
    };
  }

  handleBannerDrop() {
    return {
      addedfile: (file) => this.setState({banner_image: file}),
    };
  }

  handleLogoDrop() {
    return {
      addedfile: (file) => this.setState({logo: file}),
    };
  }

  componentConfig() {
    return {
      iconFiletypes: ['.jpg', '.png'],
      showFiletypeIcon: true,
      postUrl: 'https://httpbin.org/post',
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1,
    };
  }

  buildForm() {
    console.log(this.state.name);
    console.log(this.state.description);
    console.log(this.state.url);
    console.log(this.state.category);
    console.log(this.state.position);
    
    let formData = new FormData();

    formData.append('portfolio_item[name]', this.state.name);
    formData.append('portfolio_item[description]', this.state.description);
    formData.append('portfolio_item[url]', this.state.url);
    formData.append('portfolio_item[category]', this.state.category);
    formData.append('portfolio_item[position]', this.state.position);

    if (this.state.thumb_image_url) {
      formData.append(
        'portfolio_item[thumb_image]',
        this.state.thumb_image_url
      );
    }

    if (this.state.banner_image) {
      formData.append(
        'portfolio_item[banner_image]',
        this.state.banner_image
      );
    }

    if (this.state.logo) {
      formData.append(
        'portfolio_item[logo]',
        this.state.logo
      );
    }

    console.log(formData)

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {

    console.log(this.state.apiAction)
    console.log(this.state.apiUrl);
    console.log(this.buildForm().entries());


    axios({
      method: this.state.apiAction,
      url:  this.state.apiUrl,
      data: this.buildForm(),
      withCredentials: true
    })
      .then((response) => {
        console.log('edit mode', this.state.editMode);
   
         if (this.state.editMode) {
           console.log('checking patch method', this.state.apiUrl); 
           this.props.handleEditFormSubmission();
         } else {
           this.props.handleNewFormSubmission(response.data.portfolio_item);
         } 
        

        if (this.thumbRef != null && this.bannerRef != null && this.logo != null) {
          [this.thumbRef, this.bannerRef, this.logoRef].forEach((ref) => {
          ref.current.dropzone.removeAllFiles();
          });
         }
        
        this.setState({
          name: '',
          description: '',
          category: 'Business',
          position: '',
          url: '',
          thumb_image_url: '',
          banner_image: '',
          logo: '',
          editMode: true,
          apiUrl: `https://hajasc.devcamp.space/portfolio/portfolio_items/${this.state.id}`,
          apiAction: 'patch',
        });
    })
      .catch((error) => {
        console.log('portfolio form handleSubmit error', error);
      });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="portfolio-form-wrapper">
        <div className="two-column">
          <input
            type="text"
            name="name"
            placeholder="Portfolio Item Name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="url"
            placeholder="URL"
            value={this.state.url}
            onChange={this.handleChange}
          />
        </div>
        <div className="two-column">
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={this.state.position}
            onChange={this.handleChange}
          />

          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            className="select-element"
          >
            <option value="Business">Business</option>
            <option value="Productivity">Productivity</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <div className="one-column">
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>

        <div className="image-uploaders three-column">
          {this.state.thumb_image_url && this.state.editMode ? (
            <div className="portfolio-manager-image-wrapper">
              <img src={this.state.thumb_image_url} alt="" />
              <div className="image-removal-link">
                <a onClick={() => this.deleteImage('thumb_image')}>
                  Remove file
                </a>
              </div>
            </div>
          ) : (
            <div>
              <DropzoneComponent
                ref={this.thumbRef}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handleThumbDrop()}
              >
                <div className="dz-message">Thumbnail</div>
              </DropzoneComponent>
            </div>
          )}
          {this.state.banner_image_url && this.state.editMode ? (
            <div className="portfolio-manager-image-wrapper">
              <img src={this.state.banner_image_url} alt="" />
              <div className="image-removal-link">
                <a onClick={() => this.deleteImage('banner_image')}>
                  Remove file
                </a>
              </div>
            </div>
          ) : (
            <div>
              <DropzoneComponent
                ref={this.bannerRef}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handleBannerDrop()}
              >
                <div className="dz-message">Banner</div>
              </DropzoneComponent>
            </div>
          )}
          {this.state.logo_url && this.state.editMode ? (
            <div className="portfolio-manager-image-wrapper">
              <img src={this.state.logo_url} alt="" />
              <div className="image-removal-link">
                <a onClick={() => this.deleteImage('logo')}>
                  Remove file
                </a>
              </div>
            </div>
          ) : (
            <div>
              <DropzoneComponent
                ref={this.logoRef}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handleLogoDrop()}
              >
                <div className="dz-message">Logo</div>
              </DropzoneComponent>
            </div>
          )}
        </div>
        <div>
          <button className="btn" type="submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}
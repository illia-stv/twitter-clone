import React from 'react'
import styles from '../../styles/Profile.module.css'
import PropTypes from 'prop-types';

const ProfileUserSection = ({profile, follow}) => {
    
    return (
        <div className={styles['profile_content-section']}>
            <div className={styles['profile_content-section_background']}>
            </div>
            <div className={styles['profile_content-section_logo']}>
              <div className={styles['profile_content-section_logo-black']}>
              </div>
            </div>
            <div className={styles['profile_content-section_edit']}>
              <div>
              </div>
              <div onClick={follow} className={styles['profile_content-section_edit-button']}>
                  Follow
              </div>
            </div>
            <div className={styles['profile_content-section-info']}>
                <div className={styles['profile_content-section-info_names']}>
                    <div className={styles['profile_content-section-info_username']}>
                        {profile.username}
                    </div>
                    <div className={styles['profile_content-section-info_hash-username']}>
                        @{profile.username ? profile.username.toLocaleLowerCase().split(' ').join('') : null}
                    </div>
                </div>
                <div className={styles['profile_content-section-info_hash-desc']}>
                    {profile.desc}
                </div>
                <div className={styles['profile_content-section-info_hash-location']}>
                    <div className={styles['profile_content-section-info_hash-location-wrapper']}>
                      <div className={styles['profile_content-section-info_hash-location_svg']}>
                        <svg viewBox="0 0 24 24" fill="#666" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path><path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path></g></svg>
                      </div>
                      <div className={styles['profile_content-section-info_hash-location_item']}>
                          {profile.location}
                      </div>
                    </div>
                    <div className={styles['profile_content-section-info_hash-location-wrapper']}>
                      <div className={styles['profile_content-section-info_hash-location_svg']}>
                        <svg viewBox="0 0 24 24" fill="#666" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg>
                      </div>
                      <div className={styles['profile_content-section-info_hash-location_item']}>
                        Joined August 2021
                      </div>
                    </div>
                      
                </div>
                <div className={styles['profile_content-section-info_followers']}>
                    <div className={styles['profile_content-section-info_followers_item']}>
                        <span>{profile.following}</span> Following
                    </div>
                    <div className={styles['profile_content-section-info_followers_item']}>
                        <span>{profile.follower}</span> Followers
                    </div>
                </div>
            </div>
            <div className={styles['profile_bar']}>
              <div className={styles['profile_bar_item']}>
                Tweets
              </div>
              <div className={styles['profile_bar_item-s']}>
                Tweets&replies
              </div>
              <div className={styles['profile_bar_item']}>
                Media
              </div>
              <div className={styles['profile_bar_item']}>
                Likes
              </div>
            </div>
        </div>
    )
}

export default ProfileUserSection

ProfileUserSection.propTypes = {
  profile: PropTypes.obj,
  follow: PropTypes.func,
};
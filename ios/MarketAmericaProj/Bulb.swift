//
//  Bulb.m
//  contactListProj3
//
//  Created by Bharath on 23/06/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
@objc(Bulb)
class Bulb: RCTViewManager {
  override func view() -> UIView! {
    return BulbView()
  }
}

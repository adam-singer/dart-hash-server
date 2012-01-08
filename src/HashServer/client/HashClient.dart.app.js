//  ********** Library dart:core **************
//  ********** Natives dart:core **************
Object.prototype.$typeNameOf = function() {
  if ((typeof(window) != 'undefined' && window.constructor.name == 'DOMWindow')
      || typeof(process) != 'undefined') { // fast-path for Chrome and Node
    return this.constructor.name;
  }
  var str = Object.prototype.toString.call(this);
  str = str.substring(8, str.length - 1);
  if (str == 'Window') {
    str = 'DOMWindow';
  } else if (str == 'Document') {
    str = 'HTMLDocument';
  }
  return str;
}
function $throw(e) {
  // If e is not a value, we can use V8's captureStackTrace utility method.
  // TODO(jmesserly): capture the stack trace on other JS engines.
  if (e && (typeof e == 'object') && Error.captureStackTrace) {
    // TODO(jmesserly): this will clobber the e.stack property
    Error.captureStackTrace(e, $throw);
  }
  throw e;
}
Object.prototype.$index = function(i) {
  var proto = Object.getPrototypeOf(this);
  if (proto !== Object) {
    proto.$index = function(i) { return this[i]; }
  }
  return this[i];
}
Array.prototype.$index = function(i) { return this[i]; }
String.prototype.$index = function(i) { return this[i]; }
Object.prototype.$setindex = function(i, value) {
  var proto = Object.getPrototypeOf(this);
  if (proto !== Object) {
    proto.$setindex = function(i, value) { return this[i] = value; }
  }
  return this[i] = value;
}
Array.prototype.$setindex = function(i, value) { return this[i] = value; }
function $wrap_call$0(fn) { return fn; }
function $wrap_call$1(fn) { return fn; }
function $add(x, y) {
  return ((typeof(x) == 'number' && typeof(y) == 'number') ||
          (typeof(x) == 'string'))
    ? x + y : x.$add(y);
}
function $eq(x, y) {
  if (x == null) return y == null;
  return (typeof(x) == 'number' && typeof(y) == 'number') ||
         (typeof(x) == 'boolean' && typeof(y) == 'boolean') ||
         (typeof(x) == 'string' && typeof(y) == 'string')
    ? x == y : x.$eq(y);
}
// TODO(jimhug): Should this or should it not match equals?
Object.prototype.$eq = function(other) { return this === other; }
function $ne(x, y) {
  if (x == null) return y != null;
  return (typeof(x) == 'number' && typeof(y) == 'number') ||
         (typeof(x) == 'boolean' && typeof(y) == 'boolean') ||
         (typeof(x) == 'string' && typeof(y) == 'string')
    ? x != y : !x.$eq(y);
}
function $sub(x, y) {
  return (typeof(x) == 'number' && typeof(y) == 'number')
    ? x - y : x.$sub(y);
}
function $truncdiv(x, y) {
  if (typeof(x) == 'number' && typeof(y) == 'number') {
    if (y == 0) $throw(new IntegerDivisionByZeroException());
    var tmp = x / y;
    return (tmp < 0) ? Math.ceil(tmp) : Math.floor(tmp);
  } else {
    return x.$truncdiv(y);
  }
}
Object.prototype.get$typeName =  Object.prototype.$typeNameOf;
// ********** Code for Object **************
Object.prototype.get$dynamic = function() {
  "use strict"; return this;
}
Object.prototype.noSuchMethod = function(name, args) {
  $throw(new NoSuchMethodException(this, name, args));
}
Object.prototype.add$1 = function($0) {
  return this.noSuchMethod("add", [$0]);
};
Object.prototype.addEventListener$2 = function($0, $1) {
  return this.noSuchMethod("addEventListener", [$0, $1]);
};
Object.prototype.addEventListener$3 = function($0, $1, $2) {
  return this.noSuchMethod("addEventListener", [$0, $1, $2]);
};
Object.prototype.appendChild$1 = function($0) {
  return this.noSuchMethod("appendChild", [$0]);
};
Object.prototype.blur$0 = function() {
  return this.noSuchMethod("blur", []);
};
Object.prototype.click$0 = function() {
  return this.noSuchMethod("click", []);
};
Object.prototype.convert$1 = function($0) {
  return this.noSuchMethod("convert", [$0]);
};
Object.prototype.end$0 = function() {
  return this.noSuchMethod("end", []);
};
Object.prototype.focus$0 = function() {
  return this.noSuchMethod("focus", []);
};
Object.prototype.forEach$1 = function($0) {
  return this.noSuchMethod("forEach", [$0]);
};
Object.prototype.getAttribute$1 = function($0) {
  return this.noSuchMethod("getAttribute", [$0]);
};
Object.prototype.getBoundingClientRect$0 = function() {
  return this.noSuchMethod("getBoundingClientRect", []);
};
Object.prototype.getPropertyValue$1 = function($0) {
  return this.noSuchMethod("getPropertyValue", [$0]);
};
Object.prototype.handler$2 = function($0, $1) {
  return this.noSuchMethod("handler", [$0, $1]);
};
Object.prototype.hasAttribute$1 = function($0) {
  return this.noSuchMethod("hasAttribute", [$0]);
};
Object.prototype.hasChildNodes$0 = function() {
  return this.noSuchMethod("hasChildNodes", []);
};
Object.prototype.hasNext$0 = function() {
  return this.noSuchMethod("hasNext", []);
};
Object.prototype.hashCode$0 = function() {
  return this.noSuchMethod("hashCode", []);
};
Object.prototype.is$Exception = function() {
  return false;
};
Object.prototype.is$RegExp = function() {
  return false;
};
Object.prototype.item$1 = function($0) {
  return this.noSuchMethod("item", [$0]);
};
Object.prototype.next$0 = function() {
  return this.noSuchMethod("next", []);
};
Object.prototype.querySelector$1 = function($0) {
  return this.noSuchMethod("querySelector", [$0]);
};
Object.prototype.remove$0 = function() {
  return this.noSuchMethod("remove", []);
};
Object.prototype.remove$1 = function($0) {
  return this.noSuchMethod("remove", [$0]);
};
Object.prototype.removeAttribute$1 = function($0) {
  return this.noSuchMethod("removeAttribute", [$0]);
};
Object.prototype.removeChild$1 = function($0) {
  return this.noSuchMethod("removeChild", [$0]);
};
Object.prototype.removeEventListener$3 = function($0, $1, $2) {
  return this.noSuchMethod("removeEventListener", [$0, $1, $2]);
};
Object.prototype.setAttribute$2 = function($0, $1) {
  return this.noSuchMethod("setAttribute", [$0, $1]);
};
Object.prototype.setProperty$3 = function($0, $1, $2) {
  return this.noSuchMethod("setProperty", [$0, $1, $2]);
};
Object.prototype.split$1 = function($0) {
  return this.noSuchMethod("split", [$0]);
};
Object.prototype.start$0 = function() {
  return this.noSuchMethod("start", []);
};
Object.prototype.startsWith$1 = function($0) {
  return this.noSuchMethod("startsWith", [$0]);
};
Object.prototype.toLowerCase$0 = function() {
  return this.noSuchMethod("toLowerCase", []);
};
Object.prototype.toString$0 = function() {
  return this.toString();
};
Object.prototype.toStringAsPrecision$1 = function($0) {
  return this.noSuchMethod("toStringAsPrecision", [$0]);
};
Object.prototype.trim$0 = function() {
  return this.noSuchMethod("trim", []);
};
Object.prototype.unregister$0 = function() {
  return this.noSuchMethod("unregister", []);
};
Object.prototype.updateLayout$0 = function() {
  return this.noSuchMethod("updateLayout", []);
};
// ********** Code for IndexOutOfRangeException **************
function IndexOutOfRangeException(_index) {
  this._index = _index;
  // Initializers done
}
IndexOutOfRangeException.prototype.is$Exception = function(){return true};
IndexOutOfRangeException.prototype.toString = function() {
  return ("IndexOutOfRangeException: " + this._index);
}
IndexOutOfRangeException.prototype.toString$0 = IndexOutOfRangeException.prototype.toString;
// ********** Code for IllegalAccessException **************
function IllegalAccessException() {
  // Initializers done
}
IllegalAccessException.prototype.is$Exception = function(){return true};
IllegalAccessException.prototype.toString = function() {
  return "Attempt to modify an immutable object";
}
IllegalAccessException.prototype.toString$0 = IllegalAccessException.prototype.toString;
// ********** Code for NoSuchMethodException **************
function NoSuchMethodException(_receiver, _functionName, _arguments) {
  this._receiver = _receiver;
  this._functionName = _functionName;
  this._arguments = _arguments;
  // Initializers done
}
NoSuchMethodException.prototype.is$Exception = function(){return true};
NoSuchMethodException.prototype.toString = function() {
  var sb = new StringBufferImpl("");
  for (var i = 0;
   i < this._arguments.get$length(); i++) {
    if (i > 0) {
      sb.add(", ");
    }
    sb.add(this._arguments.$index(i));
  }
  sb.add("]");
  return ("NoSuchMethodException - receiver: '" + this._receiver + "' ") + ("function name: '" + this._functionName + "' arguments: [" + sb + "]");
}
NoSuchMethodException.prototype.toString$0 = NoSuchMethodException.prototype.toString;
// ********** Code for ClosureArgumentMismatchException **************
function ClosureArgumentMismatchException() {
  // Initializers done
}
ClosureArgumentMismatchException.prototype.is$Exception = function(){return true};
ClosureArgumentMismatchException.prototype.toString = function() {
  return "Closure argument mismatch";
}
ClosureArgumentMismatchException.prototype.toString$0 = ClosureArgumentMismatchException.prototype.toString;
// ********** Code for ObjectNotClosureException **************
function ObjectNotClosureException() {
  // Initializers done
}
ObjectNotClosureException.prototype.is$Exception = function(){return true};
ObjectNotClosureException.prototype.toString = function() {
  return "Object is not closure";
}
ObjectNotClosureException.prototype.toString$0 = ObjectNotClosureException.prototype.toString;
// ********** Code for StackOverflowException **************
function StackOverflowException() {
  // Initializers done
}
StackOverflowException.prototype.is$Exception = function(){return true};
StackOverflowException.prototype.toString = function() {
  return "Stack Overflow";
}
StackOverflowException.prototype.toString$0 = StackOverflowException.prototype.toString;
// ********** Code for BadNumberFormatException **************
function BadNumberFormatException(_s) {
  this._s = _s;
  // Initializers done
}
BadNumberFormatException.prototype.is$Exception = function(){return true};
BadNumberFormatException.prototype.toString = function() {
  return ("BadNumberFormatException: '" + this._s + "'");
}
BadNumberFormatException.prototype.toString$0 = BadNumberFormatException.prototype.toString;
// ********** Code for NullPointerException **************
function NullPointerException() {
  // Initializers done
}
NullPointerException.prototype.is$Exception = function(){return true};
NullPointerException.prototype.toString = function() {
  return "NullPointerException";
}
NullPointerException.prototype.toString$0 = NullPointerException.prototype.toString;
// ********** Code for NoMoreElementsException **************
function NoMoreElementsException() {
  // Initializers done
}
NoMoreElementsException.prototype.is$Exception = function(){return true};
NoMoreElementsException.prototype.toString = function() {
  return "NoMoreElementsException";
}
NoMoreElementsException.prototype.toString$0 = NoMoreElementsException.prototype.toString;
// ********** Code for EmptyQueueException **************
function EmptyQueueException() {
  // Initializers done
}
EmptyQueueException.prototype.is$Exception = function(){return true};
EmptyQueueException.prototype.toString = function() {
  return "EmptyQueueException";
}
EmptyQueueException.prototype.toString$0 = EmptyQueueException.prototype.toString;
// ********** Code for UnsupportedOperationException **************
function UnsupportedOperationException(_message) {
  this._message = _message;
  // Initializers done
}
UnsupportedOperationException.prototype.is$Exception = function(){return true};
UnsupportedOperationException.prototype.toString = function() {
  return ("UnsupportedOperationException: " + this._message);
}
UnsupportedOperationException.prototype.toString$0 = UnsupportedOperationException.prototype.toString;
// ********** Code for NotImplementedException **************
function NotImplementedException() {
  // Initializers done
}
NotImplementedException.prototype.is$Exception = function(){return true};
NotImplementedException.prototype.toString = function() {
  return "NotImplementedException";
}
NotImplementedException.prototype.toString$0 = NotImplementedException.prototype.toString;
// ********** Code for dart_core_Function **************
Function.prototype.to$call$0 = function() {
  this.call$0 = this._genStub(0);
  this.to$call$0 = function() { return this.call$0; };
  return this.call$0;
};
Function.prototype.call$0 = function() {
  return this.to$call$0()();
};
function to$call$0(f) { return f && f.to$call$0(); }
Function.prototype.to$call$1 = function() {
  this.call$1 = this._genStub(1);
  this.to$call$1 = function() { return this.call$1; };
  return this.call$1;
};
Function.prototype.call$1 = function($0) {
  return this.to$call$1()($0);
};
function to$call$1(f) { return f && f.to$call$1(); }
Function.prototype.to$call$2 = function() {
  this.call$2 = this._genStub(2);
  this.to$call$2 = function() { return this.call$2; };
  return this.call$2;
};
Function.prototype.call$2 = function($0, $1) {
  return this.to$call$2()($0, $1);
};
function to$call$2(f) { return f && f.to$call$2(); }
// ********** Code for Math **************
Math.parseInt = function(str) {
  var ret = parseInt(str);
    if (isNaN(ret)) $throw(new BadNumberFormatException(str));
    return ret;
}
// ********** Code for top level **************
function _map(itemsAndKeys) {
  var ret = new LinkedHashMapImplementation();
  for (var i = 0;
   i < itemsAndKeys.get$length(); ) {
    ret.$setindex(itemsAndKeys.$index(i++), itemsAndKeys.$index(i++));
  }
  return ret;
}
function _constMap(itemsAndKeys) {
  return new ImmutableMap(itemsAndKeys);
}
function _toDartException(e) {
  function attachStack(dartEx) {
    // TODO(jmesserly): setting the stack property is not a long term solution.
    var stack = e.stack;
    // The stack contains the error message, and the stack is all that is
    // printed (the exception's toString() is never called).  Make the Dart
    // exception's toString() be the dominant message.
    if (typeof stack == 'string') {
      var message = dartEx.toString();
      if (/^(Type|Range)Error:/.test(stack)) {
        // Indent JS message (it can be helpful) so new message stands out.
        stack = '    (' + stack.substring(0, stack.indexOf('\n')) + ')\n' +
                stack.substring(stack.indexOf('\n') + 1);
      }
      stack = message + '\n' + stack;
    }
    dartEx.stack = stack;
    return dartEx;
  }

  if (e instanceof TypeError) {
    switch(e.type) {
      case 'property_not_function':
      case 'called_non_callable':
        if (e.arguments[0] == null) {
          return attachStack(new NullPointerException());
        } else {
          return attachStack(new ObjectNotClosureException());
        }
        break;
      case 'non_object_property_call':
      case 'non_object_property_load':
        return attachStack(new NullPointerException());
        break;
      case 'undefined_method':
        var mname = e.arguments[0];
        if (typeof(mname) == 'string' && (mname.indexOf('call$') == 0
            || mname == 'call' || mname == 'apply')) {
          return attachStack(new ObjectNotClosureException());
        } else {
          // TODO(jmesserly): fix noSuchMethod on operators so we don't hit this
          return attachStack(new NoSuchMethodException('', e.arguments[0], []));
        }
        break;
    }
  } else if (e instanceof RangeError) {
    if (e.message.indexOf('call stack') >= 0) {
      return attachStack(new StackOverflowException());
    }
  }
  return e;
}
//  ********** Library dart:coreimpl **************
// ********** Code for ListFactory **************
ListFactory = Array;
ListFactory.ListFactory$from$factory = function(other) {
  var list = [];
  for (var $$i = other.iterator(); $$i.hasNext$0(); ) {
    var e = $$i.next$0();
    list.add(e);
  }
  return list;
}
ListFactory.prototype.get$length = function() { return this.length; };
ListFactory.prototype.set$length = function(value) { return this.length = value; };
ListFactory.prototype.add = function(value) {
  this.push(value);
}
ListFactory.prototype.clear = function() {
  this.set$length(0);
}
ListFactory.prototype.removeLast = function() {
  return this.pop();
}
ListFactory.prototype.last = function() {
  return this[this.get$length() - 1];
}
ListFactory.prototype.getRange = function(start, length) {
  return this.slice(start, start + length);
}
ListFactory.prototype.removeRange = function(start, length) {
  this.splice(start, length);
}
ListFactory.prototype.isEmpty = function() {
  return this.get$length() == 0;
}
ListFactory.prototype.iterator = function() {
  return new ListIterator(this);
}
ListFactory.prototype.add$1 = ListFactory.prototype.add;
ListFactory.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
ListFactory_Binding = ListFactory;
ListFactory_ColumnDefinition = ListFactory;
ListFactory_E = ListFactory;
ListFactory_EventHandlerReference = ListFactory;
ListFactory_FrameworkElement = ListFactory;
ListFactory_GradientStop = ListFactory;
ListFactory_html_html_Node = ListFactory;
ListFactory_RowDefinition = ListFactory;
ListFactory_dart_core_String = ListFactory;
ListFactory_T = ListFactory;
ListFactory_V = ListFactory;
ListFactory__EventListenerWrapper = ListFactory;
ListFactory__GridCell = ListFactory;
// ********** Code for ListIterator **************
function ListIterator(array) {
  this._array = array;
  this._pos = 0;
  // Initializers done
}
ListIterator.prototype.hasNext = function() {
  return this._array.get$length() > this._pos;
}
ListIterator.prototype.next = function() {
  if (!this.hasNext()) {
    $throw(const$89/*const NoMoreElementsException()*/);
  }
  return this._array.$index(this._pos++);
}
ListIterator.prototype.hasNext$0 = ListIterator.prototype.hasNext;
ListIterator.prototype.next$0 = ListIterator.prototype.next;
// ********** Code for ImmutableList **************
/** Implements extends for Dart classes on JavaScript prototypes. */
function $inherits(child, parent) {
  if (child.prototype.__proto__) {
    child.prototype.__proto__ = parent.prototype;
  } else {
    function tmp() {};
    tmp.prototype = parent.prototype;
    child.prototype = new tmp();
    child.prototype.constructor = child;
  }
}
$inherits(ImmutableList, ListFactory_E);
function ImmutableList(length) {
  this._length = length;
  // Initializers done
  Array.call(this, length);
}
ImmutableList.ImmutableList$from$factory = function(other) {
  var list = new ImmutableList(other.get$length());
  for (var i = 0;
   i < other.get$length(); i++) {
    list._setindex(i, other.$index(i));
  }
  return list;
}
ImmutableList.prototype.get$length = function() {
  return this._length;
}
ImmutableList.prototype.set$length = function(length) {
  $throw(const$76/*const IllegalAccessException()*/);
}
Object.defineProperty(ImmutableList.prototype, "length", {
  get: ImmutableList.prototype.get$length,
  set: ImmutableList.prototype.set$length
});
ImmutableList.prototype._setindex = function(index, value) {
  return this[index] = value;
}
ImmutableList.prototype.$setindex = function(index, value) {
  $throw(const$76/*const IllegalAccessException()*/);
}
ImmutableList.prototype.removeRange = function(start, length) {
  $throw(const$76/*const IllegalAccessException()*/);
}
ImmutableList.prototype.add = function(element) {
  $throw(const$76/*const IllegalAccessException()*/);
}
ImmutableList.prototype.clear = function() {
  $throw(const$76/*const IllegalAccessException()*/);
}
ImmutableList.prototype.removeLast = function() {
  $throw(const$76/*const IllegalAccessException()*/);
}
ImmutableList.prototype.toString = function() {
  return ListFactory.ListFactory$from$factory(this).toString();
}
ImmutableList.prototype.add$1 = ImmutableList.prototype.add;
ImmutableList.prototype.toString$0 = ImmutableList.prototype.toString;
// ********** Code for ImmutableMap **************
function ImmutableMap(keyValuePairs) {
  this._internal = _map(keyValuePairs);
  // Initializers done
}
ImmutableMap.prototype.$index = function(key) {
  return this._internal.$index(key);
}
ImmutableMap.prototype.get$length = function() {
  return this._internal.get$length();
}
ImmutableMap.prototype.forEach = function(f) {
  this._internal.forEach(f);
}
ImmutableMap.prototype.$setindex = function(key, value) {
  $throw(const$76/*const IllegalAccessException()*/);
}
ImmutableMap.prototype.putIfAbsent = function(key, ifAbsent) {
  $throw(const$76/*const IllegalAccessException()*/);
}
ImmutableMap.prototype.remove = function(key) {
  $throw(const$76/*const IllegalAccessException()*/);
}
ImmutableMap.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$2($0));
};
ImmutableMap.prototype.remove$1 = ImmutableMap.prototype.remove;
// ********** Code for NumImplementation **************
NumImplementation = Number;
NumImplementation.prototype.round = function() {
  'use strict'; return Math.round(this);
}
NumImplementation.prototype.hashCode = function() {
  'use strict'; return this & 0x1FFFFFFF;
}
NumImplementation.prototype.toStringAsPrecision = function(precision) {
  'use strict'; return this.toPrecision(precision)
}
NumImplementation.prototype.hashCode$0 = NumImplementation.prototype.hashCode;
NumImplementation.prototype.toStringAsPrecision$1 = NumImplementation.prototype.toStringAsPrecision;
// ********** Code for HashMapImplementation **************
function HashMapImplementation() {
  // Initializers done
  this._numberOfEntries = 0;
  this._numberOfDeleted = 0;
  this._loadLimit = HashMapImplementation._computeLoadLimit(8/*HashMapImplementation._INITIAL_CAPACITY*/);
  this._keys = new Array(8/*HashMapImplementation._INITIAL_CAPACITY*/);
  this._values = new Array(8/*HashMapImplementation._INITIAL_CAPACITY*/);
}
HashMapImplementation._computeLoadLimit = function(capacity) {
  return $truncdiv((capacity * 3), 4);
}
HashMapImplementation._firstProbe = function(hashCode, length) {
  return hashCode & (length - 1);
}
HashMapImplementation._nextProbe = function(currentProbe, numberOfProbes, length) {
  return (currentProbe + numberOfProbes) & (length - 1);
}
HashMapImplementation.prototype._probeForAdding = function(key) {
  var hash = HashMapImplementation._firstProbe(key.hashCode$0(), this._keys.get$length());
  var numberOfProbes = 1;
  var initialHash = hash;
  var insertionIndex = -1;
  while (true) {
    var existingKey = this._keys.$index(hash);
    if (existingKey == null) {
      if (insertionIndex < 0) return hash;
      return insertionIndex;
    }
    else if ($eq(existingKey, key)) {
      return hash;
    }
    else if ((insertionIndex < 0) && (const$2/*HashMapImplementation._DELETED_KEY*/ === existingKey)) {
      insertionIndex = hash;
    }
    hash = HashMapImplementation._nextProbe(hash, numberOfProbes++, this._keys.get$length());
  }
}
HashMapImplementation.prototype._probeForLookup = function(key) {
  var hash = HashMapImplementation._firstProbe(key.hashCode$0(), this._keys.get$length());
  var numberOfProbes = 1;
  var initialHash = hash;
  while (true) {
    var existingKey = this._keys.$index(hash);
    if (existingKey == null) return -1;
    if ($eq(existingKey, key)) return hash;
    hash = HashMapImplementation._nextProbe(hash, numberOfProbes++, this._keys.get$length());
  }
}
HashMapImplementation.prototype._ensureCapacity = function() {
  var newNumberOfEntries = this._numberOfEntries + 1;
  if (newNumberOfEntries >= this._loadLimit) {
    this._grow(this._keys.get$length() * 2);
    return;
  }
  var capacity = this._keys.get$length();
  var numberOfFreeOrDeleted = capacity - newNumberOfEntries;
  var numberOfFree = numberOfFreeOrDeleted - this._numberOfDeleted;
  if (this._numberOfDeleted > numberOfFree) {
    this._grow(this._keys.get$length());
  }
}
HashMapImplementation._isPowerOfTwo = function(x) {
  return ((x & (x - 1)) == 0);
}
HashMapImplementation.prototype._grow = function(newCapacity) {
  var capacity = this._keys.get$length();
  this._loadLimit = HashMapImplementation._computeLoadLimit(newCapacity);
  var oldKeys = this._keys;
  var oldValues = this._values;
  this._keys = new Array(newCapacity);
  this._values = new Array(newCapacity);
  for (var i = 0;
   i < capacity; i++) {
    var key = oldKeys.$index(i);
    if (key == null || key === const$2/*HashMapImplementation._DELETED_KEY*/) {
      continue;
    }
    var value = oldValues.$index(i);
    var newIndex = this._probeForAdding(key);
    this._keys.$setindex(newIndex, key);
    this._values.$setindex(newIndex, value);
  }
  this._numberOfDeleted = 0;
}
HashMapImplementation.prototype.$setindex = function(key, value) {
  this._ensureCapacity();
  var index = this._probeForAdding(key);
  if ((this._keys.$index(index) == null) || (this._keys.$index(index) === const$2/*HashMapImplementation._DELETED_KEY*/)) {
    this._numberOfEntries++;
  }
  this._keys.$setindex(index, key);
  this._values.$setindex(index, value);
}
HashMapImplementation.prototype.$index = function(key) {
  var index = this._probeForLookup(key);
  if (index < 0) return null;
  return this._values.$index(index);
}
HashMapImplementation.prototype.putIfAbsent = function(key, ifAbsent) {
  var index = this._probeForLookup(key);
  if (index >= 0) return this._values.$index(index);
  var value = ifAbsent();
  this.$setindex(key, value);
  return value;
}
HashMapImplementation.prototype.remove = function(key) {
  var index = this._probeForLookup(key);
  if (index >= 0) {
    this._numberOfEntries--;
    var value = this._values.$index(index);
    this._values.$setindex(index);
    this._keys.$setindex(index, const$2/*HashMapImplementation._DELETED_KEY*/);
    this._numberOfDeleted++;
    return value;
  }
  return null;
}
HashMapImplementation.prototype.get$length = function() {
  return this._numberOfEntries;
}
HashMapImplementation.prototype.forEach = function(f) {
  var length = this._keys.get$length();
  for (var i = 0;
   i < length; i++) {
    if ((this._keys.$index(i) != null) && (this._keys.$index(i) !== const$2/*HashMapImplementation._DELETED_KEY*/)) {
      f(this._keys.$index(i), this._values.$index(i));
    }
  }
}
HashMapImplementation.prototype.containsKey = function(key) {
  return (this._probeForLookup(key) != -1);
}
HashMapImplementation.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$2($0));
};
HashMapImplementation.prototype.remove$1 = HashMapImplementation.prototype.remove;
// ********** Code for HashMapImplementation_AttachedFrameworkProperty$HashMap_FrameworkObject$Dynamic **************
$inherits(HashMapImplementation_AttachedFrameworkProperty$HashMap_FrameworkObject$Dynamic, HashMapImplementation);
function HashMapImplementation_AttachedFrameworkProperty$HashMap_FrameworkObject$Dynamic() {}
// ********** Code for HashMapImplementation_E$E **************
$inherits(HashMapImplementation_E$E, HashMapImplementation);
function HashMapImplementation_E$E() {
  // Initializers done
  this._numberOfEntries = 0;
  this._numberOfDeleted = 0;
  this._loadLimit = HashMapImplementation._computeLoadLimit(8/*HashMapImplementation._INITIAL_CAPACITY*/);
  this._keys = new Array(8/*HashMapImplementation._INITIAL_CAPACITY*/);
  this._values = new Array(8/*HashMapImplementation._INITIAL_CAPACITY*/);
}
HashMapImplementation_E$E._computeLoadLimit = function(capacity) {
  return $truncdiv((capacity * 3), 4);
}
HashMapImplementation_E$E._firstProbe = function(hashCode, length) {
  return hashCode & (length - 1);
}
HashMapImplementation_E$E._nextProbe = function(currentProbe, numberOfProbes, length) {
  return (currentProbe + numberOfProbes) & (length - 1);
}
HashMapImplementation_E$E.prototype._probeForAdding = function(key) {
  var hash = HashMapImplementation._firstProbe(key.hashCode$0(), this._keys.get$length());
  var numberOfProbes = 1;
  var initialHash = hash;
  var insertionIndex = -1;
  while (true) {
    var existingKey = this._keys.$index(hash);
    if (existingKey == null) {
      if (insertionIndex < 0) return hash;
      return insertionIndex;
    }
    else if ($eq(existingKey, key)) {
      return hash;
    }
    else if ((insertionIndex < 0) && (const$2/*HashMapImplementation._DELETED_KEY*/ === existingKey)) {
      insertionIndex = hash;
    }
    hash = HashMapImplementation._nextProbe(hash, numberOfProbes++, this._keys.get$length());
  }
}
HashMapImplementation_E$E.prototype._probeForLookup = function(key) {
  var hash = HashMapImplementation._firstProbe(key.hashCode$0(), this._keys.get$length());
  var numberOfProbes = 1;
  var initialHash = hash;
  while (true) {
    var existingKey = this._keys.$index(hash);
    if (existingKey == null) return -1;
    if ($eq(existingKey, key)) return hash;
    hash = HashMapImplementation._nextProbe(hash, numberOfProbes++, this._keys.get$length());
  }
}
HashMapImplementation_E$E.prototype._ensureCapacity = function() {
  var newNumberOfEntries = this._numberOfEntries + 1;
  if (newNumberOfEntries >= this._loadLimit) {
    this._grow(this._keys.get$length() * 2);
    return;
  }
  var capacity = this._keys.get$length();
  var numberOfFreeOrDeleted = capacity - newNumberOfEntries;
  var numberOfFree = numberOfFreeOrDeleted - this._numberOfDeleted;
  if (this._numberOfDeleted > numberOfFree) {
    this._grow(this._keys.get$length());
  }
}
HashMapImplementation_E$E._isPowerOfTwo = function(x) {
  return ((x & (x - 1)) == 0);
}
HashMapImplementation_E$E.prototype._grow = function(newCapacity) {
  var capacity = this._keys.get$length();
  this._loadLimit = HashMapImplementation._computeLoadLimit(newCapacity);
  var oldKeys = this._keys;
  var oldValues = this._values;
  this._keys = new Array(newCapacity);
  this._values = new Array(newCapacity);
  for (var i = 0;
   i < capacity; i++) {
    var key = oldKeys.$index(i);
    if (key == null || key === const$2/*HashMapImplementation._DELETED_KEY*/) {
      continue;
    }
    var value = oldValues.$index(i);
    var newIndex = this._probeForAdding(key);
    this._keys.$setindex(newIndex, key);
    this._values.$setindex(newIndex, value);
  }
  this._numberOfDeleted = 0;
}
HashMapImplementation_E$E.prototype.$setindex = function(key, value) {
  this._ensureCapacity();
  var index = this._probeForAdding(key);
  if ((this._keys.$index(index) == null) || (this._keys.$index(index) === const$2/*HashMapImplementation._DELETED_KEY*/)) {
    this._numberOfEntries++;
  }
  this._keys.$setindex(index, key);
  this._values.$setindex(index, value);
}
HashMapImplementation_E$E.prototype.remove = function(key) {
  var index = this._probeForLookup(key);
  if (index >= 0) {
    this._numberOfEntries--;
    var value = this._values.$index(index);
    this._values.$setindex(index);
    this._keys.$setindex(index, const$2/*HashMapImplementation._DELETED_KEY*/);
    this._numberOfDeleted++;
    return value;
  }
  return null;
}
HashMapImplementation_E$E.prototype.forEach = function(f) {
  var length = this._keys.get$length();
  for (var i = 0;
   i < length; i++) {
    if ((this._keys.$index(i) != null) && (this._keys.$index(i) !== const$2/*HashMapImplementation._DELETED_KEY*/)) {
      f(this._keys.$index(i), this._values.$index(i));
    }
  }
}
HashMapImplementation_E$E.prototype.containsKey = function(key) {
  return (this._probeForLookup(key) != -1);
}
// ********** Code for HashMapImplementation_FrameworkElement$Dynamic **************
$inherits(HashMapImplementation_FrameworkElement$Dynamic, HashMapImplementation);
function HashMapImplementation_FrameworkElement$Dynamic() {}
// ********** Code for HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V **************
$inherits(HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V, HashMapImplementation);
function HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V() {}
// ********** Code for HashMapImplementation_dart_core_String$Dynamic **************
$inherits(HashMapImplementation_dart_core_String$Dynamic, HashMapImplementation);
function HashMapImplementation_dart_core_String$Dynamic() {}
// ********** Code for HashMapImplementation_dart_core_String$StyleSetter **************
$inherits(HashMapImplementation_dart_core_String$StyleSetter, HashMapImplementation);
function HashMapImplementation_dart_core_String$StyleSetter() {}
// ********** Code for HashSetImplementation **************
function HashSetImplementation() {
  // Initializers done
  this._backingMap = new HashMapImplementation_E$E();
}
HashSetImplementation.prototype.add = function(value) {
  this._backingMap.$setindex(value, value);
}
HashSetImplementation.prototype.contains = function(value) {
  return this._backingMap.containsKey(value);
}
HashSetImplementation.prototype.remove = function(value) {
  if (!this._backingMap.containsKey(value)) return false;
  this._backingMap.remove(value);
  return true;
}
HashSetImplementation.prototype.forEach = function(f) {
  this._backingMap.forEach(function _(key, value) {
    f(key);
  }
  );
}
HashSetImplementation.prototype.filter = function(f) {
  var result = new HashSetImplementation();
  this._backingMap.forEach(function _(key, value) {
    if (f(key)) result.add(key);
  }
  );
  return result;
}
HashSetImplementation.prototype.get$length = function() {
  return this._backingMap.get$length();
}
HashSetImplementation.prototype.iterator = function() {
  return new HashSetIterator_E(this);
}
HashSetImplementation.prototype.add$1 = HashSetImplementation.prototype.add;
HashSetImplementation.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
HashSetImplementation.prototype.remove$1 = HashSetImplementation.prototype.remove;
// ********** Code for HashSetImplementation_E **************
$inherits(HashSetImplementation_E, HashSetImplementation);
function HashSetImplementation_E() {}
// ********** Code for HashSetImplementation_FrameworkElement **************
$inherits(HashSetImplementation_FrameworkElement, HashSetImplementation);
function HashSetImplementation_FrameworkElement() {}
// ********** Code for HashSetImplementation_FrameworkProperty **************
$inherits(HashSetImplementation_FrameworkProperty, HashSetImplementation);
function HashSetImplementation_FrameworkProperty() {}
// ********** Code for HashSetImplementation_IPresentationFormatProvider **************
$inherits(HashSetImplementation_IPresentationFormatProvider, HashSetImplementation);
function HashSetImplementation_IPresentationFormatProvider() {}
// ********** Code for HashSetIterator **************
function HashSetIterator(set_) {
  this._nextValidIndex = -1;
  this._entries = set_._backingMap._keys;
  // Initializers done
  this._advance();
}
HashSetIterator.prototype.hasNext = function() {
  if (this._nextValidIndex >= this._entries.get$length()) return false;
  if (this._entries.$index(this._nextValidIndex) === const$2/*HashMapImplementation._DELETED_KEY*/) {
    this._advance();
  }
  return this._nextValidIndex < this._entries.get$length();
}
HashSetIterator.prototype.next = function() {
  if (!this.hasNext()) {
    $throw(const$89/*const NoMoreElementsException()*/);
  }
  var res = this._entries.$index(this._nextValidIndex);
  this._advance();
  return res;
}
HashSetIterator.prototype._advance = function() {
  var length = this._entries.get$length();
  var entry;
  var deletedKey = const$2/*HashMapImplementation._DELETED_KEY*/;
  do {
    if (++this._nextValidIndex >= length) break;
    entry = this._entries.$index(this._nextValidIndex);
  }
  while ((entry == null) || (entry === deletedKey))
}
HashSetIterator.prototype.hasNext$0 = HashSetIterator.prototype.hasNext;
HashSetIterator.prototype.next$0 = HashSetIterator.prototype.next;
// ********** Code for HashSetIterator_E **************
$inherits(HashSetIterator_E, HashSetIterator);
function HashSetIterator_E(set_) {
  this._nextValidIndex = -1;
  this._entries = set_._backingMap._keys;
  // Initializers done
  this._advance();
}
HashSetIterator_E.prototype._advance = function() {
  var length = this._entries.get$length();
  var entry;
  var deletedKey = const$2/*HashMapImplementation._DELETED_KEY*/;
  do {
    if (++this._nextValidIndex >= length) break;
    entry = this._entries.$index(this._nextValidIndex);
  }
  while ((entry == null) || (entry === deletedKey))
}
// ********** Code for _DeletedKeySentinel **************
function _DeletedKeySentinel() {
  // Initializers done
}
// ********** Code for KeyValuePair **************
function KeyValuePair(key, value) {
  this.key = key;
  this.value = value;
  // Initializers done
}
KeyValuePair.prototype.get$value = function() { return this.value; };
KeyValuePair.prototype.set$value = function(value) { return this.value = value; };
// ********** Code for KeyValuePair_K$V **************
$inherits(KeyValuePair_K$V, KeyValuePair);
function KeyValuePair_K$V(key, value) {
  this.key = key;
  this.value = value;
  // Initializers done
}
// ********** Code for LinkedHashMapImplementation **************
function LinkedHashMapImplementation() {
  // Initializers done
  this._map = new HashMapImplementation();
  this._list = new DoubleLinkedQueue_KeyValuePair_K$V();
}
LinkedHashMapImplementation.prototype.$setindex = function(key, value) {
  if (this._map.containsKey(key)) {
    this._map.$index(key).get$element().set$value(value);
  }
  else {
    this._list.addLast(new KeyValuePair_K$V(key, value));
    this._map.$setindex(key, this._list.lastEntry());
  }
}
LinkedHashMapImplementation.prototype.$index = function(key) {
  var entry = this._map.$index(key);
  if (entry == null) return null;
  return entry.get$element().get$value();
}
LinkedHashMapImplementation.prototype.remove = function(key) {
  var entry = this._map.remove(key);
  if (entry == null) return null;
  entry.remove();
  return entry.get$element().get$value();
}
LinkedHashMapImplementation.prototype.putIfAbsent = function(key, ifAbsent) {
  var value = this.$index(key);
  if ((this.$index(key) == null) && !(this.containsKey(key))) {
    value = ifAbsent();
    this.$setindex(key, value);
  }
  return value;
}
LinkedHashMapImplementation.prototype.forEach = function(f) {
  this._list.forEach(function _(entry) {
    f(entry.key, entry.value);
  }
  );
}
LinkedHashMapImplementation.prototype.containsKey = function(key) {
  return this._map.containsKey(key);
}
LinkedHashMapImplementation.prototype.get$length = function() {
  return this._map.get$length();
}
LinkedHashMapImplementation.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$2($0));
};
LinkedHashMapImplementation.prototype.remove$1 = LinkedHashMapImplementation.prototype.remove;
// ********** Code for DoubleLinkedQueueEntry **************
function DoubleLinkedQueueEntry(e) {
  // Initializers done
  this._element = e;
}
DoubleLinkedQueueEntry.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry.prototype.prepend = function(e) {
  new DoubleLinkedQueueEntry_E(e)._link(this._previous, this);
}
DoubleLinkedQueueEntry.prototype.remove = function() {
  this._previous._next = this._next;
  this._next._previous = this._previous;
  this._next = null;
  this._previous = null;
  return this._element;
}
DoubleLinkedQueueEntry.prototype._asNonSentinelEntry = function() {
  return this;
}
DoubleLinkedQueueEntry.prototype.previousEntry = function() {
  return this._previous._asNonSentinelEntry();
}
DoubleLinkedQueueEntry.prototype.get$element = function() {
  return this._element;
}
DoubleLinkedQueueEntry.prototype.remove$0 = DoubleLinkedQueueEntry.prototype.remove;
// ********** Code for DoubleLinkedQueueEntry_E **************
$inherits(DoubleLinkedQueueEntry_E, DoubleLinkedQueueEntry);
function DoubleLinkedQueueEntry_E(e) {
  // Initializers done
  this._element = e;
}
DoubleLinkedQueueEntry_E.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry_E.prototype.prepend = function(e) {
  new DoubleLinkedQueueEntry_E(e)._link(this._previous, this);
}
DoubleLinkedQueueEntry_E.prototype._asNonSentinelEntry = function() {
  return this;
}
// ********** Code for DoubleLinkedQueueEntry_KeyValuePair_K$V **************
$inherits(DoubleLinkedQueueEntry_KeyValuePair_K$V, DoubleLinkedQueueEntry);
function DoubleLinkedQueueEntry_KeyValuePair_K$V(e) {
  // Initializers done
  this._element = e;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype.prepend = function(e) {
  new DoubleLinkedQueueEntry_KeyValuePair_K$V(e)._link(this._previous, this);
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype.remove = function() {
  this._previous._next = this._next;
  this._next._previous = this._previous;
  this._next = null;
  this._previous = null;
  return this._element;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype._asNonSentinelEntry = function() {
  return this;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype.previousEntry = function() {
  return this._previous._asNonSentinelEntry();
}
// ********** Code for _DoubleLinkedQueueEntrySentinel **************
$inherits(_DoubleLinkedQueueEntrySentinel, DoubleLinkedQueueEntry_E);
function _DoubleLinkedQueueEntrySentinel() {
  // Initializers done
  DoubleLinkedQueueEntry_E.call(this, null);
  this._link(this, this);
}
_DoubleLinkedQueueEntrySentinel.prototype.remove = function() {
  $throw(const$77/*const EmptyQueueException()*/);
}
_DoubleLinkedQueueEntrySentinel.prototype._asNonSentinelEntry = function() {
  return null;
}
_DoubleLinkedQueueEntrySentinel.prototype.get$element = function() {
  $throw(const$77/*const EmptyQueueException()*/);
}
_DoubleLinkedQueueEntrySentinel.prototype.remove$0 = _DoubleLinkedQueueEntrySentinel.prototype.remove;
// ********** Code for _DoubleLinkedQueueEntrySentinel_E **************
$inherits(_DoubleLinkedQueueEntrySentinel_E, _DoubleLinkedQueueEntrySentinel);
function _DoubleLinkedQueueEntrySentinel_E() {
  // Initializers done
  DoubleLinkedQueueEntry_E.call(this, null);
  this._link(this, this);
}
// ********** Code for _DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V **************
$inherits(_DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V, _DoubleLinkedQueueEntrySentinel);
function _DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V() {
  // Initializers done
  DoubleLinkedQueueEntry_KeyValuePair_K$V.call(this, null);
  this._link(this, this);
}
// ********** Code for DoubleLinkedQueue **************
function DoubleLinkedQueue() {
  // Initializers done
  this._sentinel = new _DoubleLinkedQueueEntrySentinel_E();
}
DoubleLinkedQueue.prototype.addLast = function(value) {
  this._sentinel.prepend(value);
}
DoubleLinkedQueue.prototype.add = function(value) {
  this.addLast(value);
}
DoubleLinkedQueue.prototype.get$length = function() {
  var counter = 0;
  this.forEach(function _(element) {
    counter++;
  }
  );
  return counter;
}
DoubleLinkedQueue.prototype.forEach = function(f) {
  var entry = this._sentinel._next;
  while (entry !== this._sentinel) {
    var nextEntry = entry._next;
    f(entry._element);
    entry = nextEntry;
  }
}
DoubleLinkedQueue.prototype.iterator = function() {
  return new _DoubleLinkedQueueIterator_E(this._sentinel);
}
DoubleLinkedQueue.prototype.add$1 = DoubleLinkedQueue.prototype.add;
DoubleLinkedQueue.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
// ********** Code for DoubleLinkedQueue_KeyValuePair_K$V **************
$inherits(DoubleLinkedQueue_KeyValuePair_K$V, DoubleLinkedQueue);
function DoubleLinkedQueue_KeyValuePair_K$V() {
  // Initializers done
  this._sentinel = new _DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V();
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.addLast = function(value) {
  this._sentinel.prepend(value);
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.lastEntry = function() {
  return this._sentinel.previousEntry();
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.forEach = function(f) {
  var entry = this._sentinel._next;
  while (entry !== this._sentinel) {
    var nextEntry = entry._next;
    f(entry._element);
    entry = nextEntry;
  }
}
// ********** Code for _DoubleLinkedQueueIterator **************
function _DoubleLinkedQueueIterator(_sentinel) {
  this._sentinel = _sentinel;
  // Initializers done
  this._currentEntry = this._sentinel;
}
_DoubleLinkedQueueIterator.prototype.hasNext = function() {
  return this._currentEntry._next !== this._sentinel;
}
_DoubleLinkedQueueIterator.prototype.next = function() {
  if (!this.hasNext()) {
    $throw(const$89/*const NoMoreElementsException()*/);
  }
  this._currentEntry = this._currentEntry._next;
  return this._currentEntry.get$element();
}
_DoubleLinkedQueueIterator.prototype.hasNext$0 = _DoubleLinkedQueueIterator.prototype.hasNext;
_DoubleLinkedQueueIterator.prototype.next$0 = _DoubleLinkedQueueIterator.prototype.next;
// ********** Code for _DoubleLinkedQueueIterator_E **************
$inherits(_DoubleLinkedQueueIterator_E, _DoubleLinkedQueueIterator);
function _DoubleLinkedQueueIterator_E(_sentinel) {
  this._sentinel = _sentinel;
  // Initializers done
  this._currentEntry = this._sentinel;
}
// ********** Code for StringBufferImpl **************
function StringBufferImpl(content) {
  // Initializers done
  this.clear();
  this.add(content);
}
StringBufferImpl.prototype.get$length = function() {
  return this._length;
}
StringBufferImpl.prototype.add = function(obj) {
  var str = obj.toString();
  if (str == null || str.isEmpty()) return this;
  this._buffer.add(str);
  this._length += str.length;
  return this;
}
StringBufferImpl.prototype.clear = function() {
  this._buffer = new Array();
  this._length = 0;
  return this;
}
StringBufferImpl.prototype.toString = function() {
  if (this._buffer.get$length() == 0) return "";
  if (this._buffer.get$length() == 1) return this._buffer.$index(0);
  var result = StringBase.concatAll(this._buffer);
  this._buffer.clear();
  this._buffer.add(result);
  return result;
}
StringBufferImpl.prototype.add$1 = StringBufferImpl.prototype.add;
StringBufferImpl.prototype.toString$0 = StringBufferImpl.prototype.toString;
// ********** Code for StringBase **************
function StringBase() {}
StringBase.join = function(strings, separator) {
  if (strings.get$length() == 0) return '';
  var s = strings.$index(0);
  for (var i = 1;
   i < strings.get$length(); i++) {
    s = s + separator + strings.$index(i);
  }
  return s;
}
StringBase.concatAll = function(strings) {
  return StringBase.join(strings, "");
}
// ********** Code for StringImplementation **************
StringImplementation = String;
StringImplementation.prototype.get$length = function() { return this.length; };
StringImplementation.prototype.startsWith = function(other) {
    'use strict';
    if (other.length > this.length) return false;
    return other == this.substring(0, other.length);
}
StringImplementation.prototype.isEmpty = function() {
  return this.length == 0;
}
StringImplementation.prototype.contains = function(pattern, startIndex) {
  'use strict'; return this.indexOf(pattern, startIndex) >= 0;
}
StringImplementation.prototype._replaceFirst = function(from, to) {
  'use strict';return this.replace(from, to);
}
StringImplementation.prototype._replaceRegExp = function(from, to) {
  'use strict';return this.replace(from.re, to);
}
StringImplementation.prototype.replaceFirst = function(from, to) {
  if ((typeof(from) == 'string')) return this._replaceFirst(from, to);
  if (!!(from && from.is$RegExp())) return this._replaceRegExp(from, to);
  var $$list = from.allMatches(this);
  for (var $$i = from.allMatches(this).iterator(); $$i.hasNext$0(); ) {
    var match = $$i.next$0();
    return this.substring(0, match.start$0()) + to + this.substring(match.end$0());
  }
}
StringImplementation.prototype.hashCode = function() {
      'use strict';
      var hash = 0;
      for (var i = 0; i < this.length; i++) {
        hash = 0x1fffffff & (hash + this.charCodeAt(i));
        hash = 0x1fffffff & (hash + ((0x0007ffff & hash) << 10));
        hash ^= hash >> 6;
      }

      hash = 0x1fffffff & (hash + ((0x03ffffff & hash) << 3));
      hash ^= hash >> 11;
      return 0x1fffffff & (hash + ((0x00003fff & hash) << 15));
}
StringImplementation.prototype.hashCode$0 = StringImplementation.prototype.hashCode;
StringImplementation.prototype.split$1 = StringImplementation.prototype.split;
StringImplementation.prototype.startsWith$1 = StringImplementation.prototype.startsWith;
StringImplementation.prototype.toLowerCase$0 = StringImplementation.prototype.toLowerCase;
StringImplementation.prototype.trim$0 = StringImplementation.prototype.trim;
// ********** Code for _Worker **************
// ********** Code for _ArgumentMismatchException **************
$inherits(_ArgumentMismatchException, ClosureArgumentMismatchException);
function _ArgumentMismatchException(_message) {
  this._dart_coreimpl_message = _message;
  // Initializers done
  ClosureArgumentMismatchException.call(this);
}
_ArgumentMismatchException.prototype.toString = function() {
  return ("Closure argument mismatch: " + this._dart_coreimpl_message);
}
_ArgumentMismatchException.prototype.toString$0 = _ArgumentMismatchException.prototype.toString;
// ********** Code for _FunctionImplementation **************
_FunctionImplementation = Function;
_FunctionImplementation.prototype._genStub = function(argsLength, names) {
      // Fast path #1: if no named arguments and arg count matches
      if (this.length == argsLength && !names) {
        return this;
      }

      var paramsNamed = this.$optional ? (this.$optional.length / 2) : 0;
      var paramsBare = this.length - paramsNamed;
      var argsNamed = names ? names.length : 0;
      var argsBare = argsLength - argsNamed;

      // Check we got the right number of arguments
      if (argsBare < paramsBare || argsLength > this.length ||
          argsNamed > paramsNamed) {
        return function() {
          $throw(new _ArgumentMismatchException(
            'Wrong number of arguments to function. Expected ' + paramsBare +
            ' positional arguments and at most ' + paramsNamed +
            ' named arguments, but got ' + argsBare +
            ' positional arguments and ' + argsNamed + ' named arguments.'));
        };
      }

      // First, fill in all of the default values
      var p = new Array(paramsBare);
      if (paramsNamed) {
        p = p.concat(this.$optional.slice(paramsNamed));
      }
      // Fill in positional args
      var a = new Array(argsLength);
      for (var i = 0; i < argsBare; i++) {
        p[i] = a[i] = '$' + i;
      }
      // Then overwrite with supplied values for optional args
      var lastParameterIndex;
      var namesInOrder = true;
      for (var i = 0; i < argsNamed; i++) {
        var name = names[i];
        a[i + argsBare] = name;
        var j = this.$optional.indexOf(name);
        if (j < 0 || j >= paramsNamed) {
          return function() {
            $throw(new _ArgumentMismatchException(
              'Named argument "' + name + '" was not expected by function.' +
              ' Did you forget to mark the function parameter [optional]?'));
          };
        } else if (lastParameterIndex && lastParameterIndex > j) {
          namesInOrder = false;
        }
        p[j + paramsBare] = name;
        lastParameterIndex = j;
      }

      if (this.length == argsLength && namesInOrder) {
        // Fast path #2: named arguments, but they're in order and all supplied.
        return this;
      }

      // Note: using Function instead of 'eval' to get a clean scope.
      // TODO(jmesserly): evaluate the performance of these stubs.
      var f = 'function(' + a.join(',') + '){return $f(' + p.join(',') + ');}';
      return new Function('$f', 'return ' + f + '').call(null, this);
    
}
// ********** Code for top level **************
//  ********** Library dom **************
// ********** Code for Window **************
// ********** Code for AbstractWorker **************
function $dynamic(name) {
  var f = Object.prototype[name];
  if (f && f.methods) return f.methods;

  var methods = {};
  if (f) methods.Object = f;
  function $dynamicBind() {
    // Find the target method
    var obj = this;
    var tag = obj.$typeNameOf();
    var method = methods[tag];
    if (!method) {
      var table = $dynamicMetadata;
      for (var i = 0; i < table.length; i++) {
        var entry = table[i];
        if (entry.map.hasOwnProperty(tag)) {
          method = methods[entry.tag];
          if (method) break;
        }
      }
    }
    method = method || methods.Object;
    // Patch the prototype, but don't overwrite an existing stub, like
    // the one on Object.prototype.
    var proto = Object.getPrototypeOf(obj);
    if (!proto.hasOwnProperty(name)) proto[name] = method;

    return method.apply(this, Array.prototype.slice.call(arguments));
  };
  $dynamicBind.methods = methods;
  Object.prototype[name] = $dynamicBind;
  return methods;
}
if (typeof $dynamicMetadata == 'undefined') $dynamicMetadata = [];

function $dynamicSetMetadata(inputTable) {
  // TODO: Deal with light isolates.
  var table = [];
  for (var i = 0; i < inputTable.length; i++) {
    var tag = inputTable[i][0];
    var tags = inputTable[i][1];
    var map = {};
    var tagNames = tags.split('|');
    for (var j = 0; j < tagNames.length; j++) {
      map[tagNames[j]] = true;
    }
    table.push({tag: tag, tags: tags, map: map});
  }
  $dynamicMetadata = table;
}
$dynamic("get$dartObjectLocalStorage").AbstractWorker = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AbstractWorker = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").AbstractWorker = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").AbstractWorker = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").AbstractWorker = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for ArrayBuffer **************
$dynamic("get$dartObjectLocalStorage").ArrayBuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ArrayBuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ArrayBufferView **************
$dynamic("get$dartObjectLocalStorage").ArrayBufferView = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ArrayBufferView = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_Attr **************
$dynamic("get$name").Attr = function() { return this.name; };
$dynamic("set$name").Attr = function(value) { return this.name = value; };
$dynamic("get$value").Attr = function() { return this.value; };
$dynamic("set$value").Attr = function(value) { return this.value = value; };
// ********** Code for AudioBuffer **************
$dynamic("get$length").AudioBuffer = function() { return this.length; };
$dynamic("set$length").AudioBuffer = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").AudioBuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioBuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioBufferSourceNode **************
// ********** Code for AudioChannelMerger **************
// ********** Code for AudioChannelSplitter **************
// ********** Code for AudioContext **************
$dynamic("get$dartObjectLocalStorage").AudioContext = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioContext = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioDestinationNode **************
// ********** Code for AudioGain **************
// ********** Code for AudioGainNode **************
// ********** Code for AudioListener **************
$dynamic("get$dartObjectLocalStorage").AudioListener = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioListener = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioNode **************
$dynamic("get$dartObjectLocalStorage").AudioNode = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioNode = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioPannerNode **************
// ********** Code for AudioParam **************
$dynamic("get$name").AudioParam = function() { return this.name; };
$dynamic("set$name").AudioParam = function(value) { return this.name = value; };
$dynamic("get$value").AudioParam = function() { return this.value; };
$dynamic("set$value").AudioParam = function(value) { return this.value = value; };
$dynamic("get$dartObjectLocalStorage").AudioParam = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioParam = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioProcessingEvent **************
// ********** Code for AudioSourceNode **************
// ********** Code for BarInfo **************
$dynamic("get$dartObjectLocalStorage").BarInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").BarInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for BeforeLoadEvent **************
// ********** Code for BiquadFilterNode **************
// ********** Code for Blob **************
$dynamic("get$dartObjectLocalStorage").Blob = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Blob = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CDATASection **************
// ********** Code for CSSCharsetRule **************
// ********** Code for CSSFontFaceRule **************
$dynamic("get$style").CSSFontFaceRule = function() { return this.style; };
$dynamic("set$style").CSSFontFaceRule = function(value) { return this.style = value; };
// ********** Code for CSSImportRule **************
// ********** Code for CSSMediaRule **************
// ********** Code for CSSPageRule **************
$dynamic("get$style").CSSPageRule = function() { return this.style; };
$dynamic("set$style").CSSPageRule = function(value) { return this.style = value; };
// ********** Code for CSSPrimitiveValue **************
// ********** Code for CSSRule **************
$dynamic("get$dartObjectLocalStorage").CSSRule = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CSSRule = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CSSRuleList **************
$dynamic("get$length").CSSRuleList = function() { return this.length; };
$dynamic("set$length").CSSRuleList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").CSSRuleList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CSSRuleList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").CSSRuleList = function($0) {
  return this.item($0);
};
// ********** Code for CSSStyleDeclaration **************
$dynamic("get$length").CSSStyleDeclaration = function() { return this.length; };
$dynamic("set$length").CSSStyleDeclaration = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").CSSStyleDeclaration = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CSSStyleDeclaration = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("getPropertyValue$1").CSSStyleDeclaration = function($0) {
  return this.getPropertyValue($0);
};
$dynamic("item$1").CSSStyleDeclaration = function($0) {
  return this.item($0);
};
$dynamic("setProperty$3").CSSStyleDeclaration = function($0, $1, $2) {
  return this.setProperty($0, $1, $2);
};
// ********** Code for CSSStyleRule **************
$dynamic("get$style").CSSStyleRule = function() { return this.style; };
$dynamic("set$style").CSSStyleRule = function(value) { return this.style = value; };
// ********** Code for CSSStyleSheet **************
// ********** Code for CSSUnknownRule **************
// ********** Code for CSSValue **************
$dynamic("get$dartObjectLocalStorage").CSSValue = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CSSValue = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CSSValueList **************
$dynamic("get$length").CSSValueList = function() { return this.length; };
$dynamic("set$length").CSSValueList = function(value) { return this.length = value; };
$dynamic("item$1").CSSValueList = function($0) {
  return this.item($0);
};
// ********** Code for CanvasGradient **************
$dynamic("get$dartObjectLocalStorage").CanvasGradient = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CanvasGradient = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CanvasPattern **************
$dynamic("get$dartObjectLocalStorage").CanvasPattern = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CanvasPattern = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CanvasPixelArray **************
$dynamic("get$length").CanvasPixelArray = function() { return this.length; };
$dynamic("set$length").CanvasPixelArray = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").CanvasPixelArray = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CanvasPixelArray = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CanvasRenderingContext **************
$dynamic("get$dartObjectLocalStorage").CanvasRenderingContext = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CanvasRenderingContext = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CanvasRenderingContext2D **************
// ********** Code for CharacterData **************
$dynamic("get$length").CharacterData = function() { return this.length; };
$dynamic("set$length").CharacterData = function(value) { return this.length = value; };
// ********** Code for ClientRect **************
$dynamic("get$bottom").ClientRect = function() { return this.bottom; };
$dynamic("set$bottom").ClientRect = function(value) { return this.bottom = value; };
$dynamic("get$height").ClientRect = function() { return this.height; };
$dynamic("set$height").ClientRect = function(value) { return this.height = value; };
$dynamic("get$left").ClientRect = function() { return this.left; };
$dynamic("set$left").ClientRect = function(value) { return this.left = value; };
$dynamic("get$right").ClientRect = function() { return this.right; };
$dynamic("set$right").ClientRect = function(value) { return this.right = value; };
$dynamic("get$top").ClientRect = function() { return this.top; };
$dynamic("set$top").ClientRect = function(value) { return this.top = value; };
$dynamic("get$width").ClientRect = function() { return this.width; };
$dynamic("set$width").ClientRect = function(value) { return this.width = value; };
$dynamic("get$dartObjectLocalStorage").ClientRect = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ClientRect = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ClientRectList **************
$dynamic("get$length").ClientRectList = function() { return this.length; };
$dynamic("set$length").ClientRectList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").ClientRectList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ClientRectList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").ClientRectList = function($0) {
  return this.item($0);
};
// ********** Code for Clipboard **************
$dynamic("get$dartObjectLocalStorage").Clipboard = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Clipboard = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CloseEvent **************
// ********** Code for Comment **************
// ********** Code for CompositionEvent **************
// ********** Code for Console **************
Console = (typeof console == 'undefined' ? {} : console);
Console.get$dartObjectLocalStorage = function() { return this.dartObjectLocalStorage; };
Console.set$dartObjectLocalStorage = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ConvolverNode **************
// ********** Code for Coordinates **************
$dynamic("get$dartObjectLocalStorage").Coordinates = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Coordinates = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Counter **************
$dynamic("get$dartObjectLocalStorage").Counter = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Counter = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Crypto **************
$dynamic("get$dartObjectLocalStorage").Crypto = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Crypto = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CustomEvent **************
// ********** Code for DOMApplicationCache **************
$dynamic("get$dartObjectLocalStorage").DOMApplicationCache = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMApplicationCache = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").DOMApplicationCache = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").DOMApplicationCache = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").DOMApplicationCache = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for DOMException **************
$dynamic("get$name").DOMException = function() { return this.name; };
$dynamic("set$name").DOMException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").DOMException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").DOMException = function() {
  return this.toString();
};
// ********** Code for DOMFileSystem **************
$dynamic("get$name").DOMFileSystem = function() { return this.name; };
$dynamic("set$name").DOMFileSystem = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").DOMFileSystem = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMFileSystem = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMFileSystemSync **************
$dynamic("get$name").DOMFileSystemSync = function() { return this.name; };
$dynamic("set$name").DOMFileSystemSync = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").DOMFileSystemSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMFileSystemSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMFormData **************
$dynamic("get$dartObjectLocalStorage").DOMFormData = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMFormData = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_DOMImplementation **************
$dynamic("get$dartObjectLocalStorage").DOMImplementation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMImplementation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMMimeType **************
$dynamic("get$dartObjectLocalStorage").DOMMimeType = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMMimeType = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMMimeTypeArray **************
$dynamic("get$length").DOMMimeTypeArray = function() { return this.length; };
$dynamic("set$length").DOMMimeTypeArray = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").DOMMimeTypeArray = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMMimeTypeArray = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").DOMMimeTypeArray = function($0) {
  return this.item($0);
};
// ********** Code for DOMParser **************
$dynamic("get$dartObjectLocalStorage").DOMParser = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMParser = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMPlugin **************
$dynamic("get$length").DOMPlugin = function() { return this.length; };
$dynamic("set$length").DOMPlugin = function(value) { return this.length = value; };
$dynamic("get$name").DOMPlugin = function() { return this.name; };
$dynamic("set$name").DOMPlugin = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").DOMPlugin = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMPlugin = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").DOMPlugin = function($0) {
  return this.item($0);
};
// ********** Code for DOMPluginArray **************
$dynamic("get$length").DOMPluginArray = function() { return this.length; };
$dynamic("set$length").DOMPluginArray = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").DOMPluginArray = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMPluginArray = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").DOMPluginArray = function($0) {
  return this.item($0);
};
// ********** Code for DOMSelection **************
$dynamic("get$dartObjectLocalStorage").DOMSelection = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMSelection = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").DOMSelection = function() {
  return this.toString();
};
// ********** Code for DOMSettableTokenList **************
$dynamic("get$value").DOMSettableTokenList = function() { return this.value; };
$dynamic("set$value").DOMSettableTokenList = function(value) { return this.value = value; };
// ********** Code for DOMTokenList **************
$dynamic("get$length").DOMTokenList = function() { return this.length; };
$dynamic("set$length").DOMTokenList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").DOMTokenList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMTokenList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("add$1").DOMTokenList = function($0) {
  return this.add($0);
};
$dynamic("item$1").DOMTokenList = function($0) {
  return this.item($0);
};
$dynamic("remove$1").DOMTokenList = function($0) {
  return this.remove($0);
};
$dynamic("toString$0").DOMTokenList = function() {
  return this.toString();
};
// ********** Code for DOMURL **************
$dynamic("get$dartObjectLocalStorage").DOMURL = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMURL = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_DOMWindow **************
$dynamic("get$document").DOMWindow = function() { return this.document; };
$dynamic("set$document").DOMWindow = function(value) { return this.document = value; };
$dynamic("get$innerHeight").DOMWindow = function() { return this.innerHeight; };
$dynamic("set$innerHeight").DOMWindow = function(value) { return this.innerHeight = value; };
$dynamic("get$innerWidth").DOMWindow = function() { return this.innerWidth; };
$dynamic("set$innerWidth").DOMWindow = function(value) { return this.innerWidth = value; };
$dynamic("get$length").DOMWindow = function() { return this.length; };
$dynamic("set$length").DOMWindow = function(value) { return this.length = value; };
$dynamic("get$name").DOMWindow = function() { return this.name; };
$dynamic("set$name").DOMWindow = function(value) { return this.name = value; };
$dynamic("get$parent").DOMWindow = function() { return this.parent; };
$dynamic("set$parent").DOMWindow = function(value) { return this.parent = value; };
$dynamic("get$top").DOMWindow = function() { return this.top; };
$dynamic("set$top").DOMWindow = function(value) { return this.top = value; };
$dynamic("get$blur").DOMWindow = function() {
  return this.blur.bind(this);
}
$dynamic("get$focus").DOMWindow = function() {
  return this.focus.bind(this);
}
$dynamic("get$dartObjectLocalStorage").DOMWindow = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMWindow = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").DOMWindow = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").DOMWindow = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("blur$0").DOMWindow = function() {
  return this.blur();
};
$dynamic("focus$0").DOMWindow = function() {
  return this.focus();
};
$dynamic("removeEventListener$3").DOMWindow = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for DataTransferItem **************
$dynamic("get$dartObjectLocalStorage").DataTransferItem = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DataTransferItem = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DataTransferItemList **************
$dynamic("get$length").DataTransferItemList = function() { return this.length; };
$dynamic("set$length").DataTransferItemList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").DataTransferItemList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DataTransferItemList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").DataTransferItemList = function($0) {
  return this.item($0);
};
// ********** Code for DataView **************
// ********** Code for dom_Database **************
$dynamic("get$dartObjectLocalStorage").Database = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Database = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_DatabaseSync **************
$dynamic("get$dartObjectLocalStorage").DatabaseSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DatabaseSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_DedicatedWorkerContext **************
// ********** Code for DelayNode **************
// ********** Code for DeviceMotionEvent **************
// ********** Code for DeviceOrientationEvent **************
// ********** Code for DirectoryEntry **************
// ********** Code for DirectoryEntrySync **************
// ********** Code for DirectoryReader **************
$dynamic("get$dartObjectLocalStorage").DirectoryReader = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DirectoryReader = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DirectoryReaderSync **************
$dynamic("get$dartObjectLocalStorage").DirectoryReaderSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DirectoryReaderSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Document **************
$dynamic("get$documentElement").Document = function() { return this.documentElement; };
$dynamic("set$documentElement").Document = function(value) { return this.documentElement = value; };
$dynamic("querySelector$1").Document = function($0) {
  return this.querySelector($0);
};
// ********** Code for DocumentFragment **************
$dynamic("querySelector$1").DocumentFragment = function($0) {
  return this.querySelector($0);
};
// ********** Code for dom_DocumentType **************
$dynamic("get$name").DocumentType = function() { return this.name; };
$dynamic("set$name").DocumentType = function(value) { return this.name = value; };
// ********** Code for DynamicsCompressorNode **************
// ********** Code for Element **************
$dynamic("get$clientHeight").Element = function() { return this.clientHeight; };
$dynamic("set$clientHeight").Element = function(value) { return this.clientHeight = value; };
$dynamic("get$clientWidth").Element = function() { return this.clientWidth; };
$dynamic("set$clientWidth").Element = function(value) { return this.clientWidth = value; };
$dynamic("get$offsetLeft").Element = function() { return this.offsetLeft; };
$dynamic("set$offsetLeft").Element = function(value) { return this.offsetLeft = value; };
$dynamic("get$offsetTop").Element = function() { return this.offsetTop; };
$dynamic("set$offsetTop").Element = function(value) { return this.offsetTop = value; };
$dynamic("get$style").Element = function() { return this.style; };
$dynamic("set$style").Element = function(value) { return this.style = value; };
$dynamic("get$tagName").Element = function() { return this.tagName; };
$dynamic("set$tagName").Element = function(value) { return this.tagName = value; };
$dynamic("get$blur").Element = function() {
  return this.blur.bind(this);
}
$dynamic("get$focus").Element = function() {
  return this.focus.bind(this);
}
$dynamic("blur$0").Element = function() {
  return this.blur();
};
$dynamic("focus$0").Element = function() {
  return this.focus();
};
$dynamic("getAttribute$1").Element = function($0) {
  return this.getAttribute($0);
};
$dynamic("getBoundingClientRect$0").Element = function() {
  return this.getBoundingClientRect();
};
$dynamic("hasAttribute$1").Element = function($0) {
  return this.hasAttribute($0);
};
$dynamic("querySelector$1").Element = function($0) {
  return this.querySelector($0);
};
$dynamic("removeAttribute$1").Element = function($0) {
  return this.removeAttribute($0);
};
$dynamic("setAttribute$2").Element = function($0, $1) {
  return this.setAttribute($0, $1);
};
// ********** Code for ElementTimeControl **************
$dynamic("get$dartObjectLocalStorage").ElementTimeControl = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ElementTimeControl = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_ElementTraversal **************
$dynamic("get$dartObjectLocalStorage").ElementTraversal = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ElementTraversal = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Entity **************
// ********** Code for EntityReference **************
// ********** Code for Entry **************
$dynamic("get$name").Entry = function() { return this.name; };
$dynamic("set$name").Entry = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").Entry = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Entry = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("remove$1").Entry = function($0) {
  return this.remove($wrap_call$0(to$call$0($0)), $wrap_call$1(to$call$1(null)));
};
// ********** Code for EntryArray **************
$dynamic("get$length").EntryArray = function() { return this.length; };
$dynamic("set$length").EntryArray = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").EntryArray = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EntryArray = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").EntryArray = function($0) {
  return this.item($0);
};
// ********** Code for EntryArraySync **************
$dynamic("get$length").EntryArraySync = function() { return this.length; };
$dynamic("set$length").EntryArraySync = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").EntryArraySync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EntryArraySync = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").EntryArraySync = function($0) {
  return this.item($0);
};
// ********** Code for EntrySync **************
$dynamic("get$name").EntrySync = function() { return this.name; };
$dynamic("set$name").EntrySync = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").EntrySync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EntrySync = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("remove$0").EntrySync = function() {
  return this.remove();
};
// ********** Code for ErrorEvent **************
// ********** Code for Event **************
$dynamic("get$cancelBubble").Event = function() { return this.cancelBubble; };
$dynamic("set$cancelBubble").Event = function(value) { return this.cancelBubble = value; };
$dynamic("get$cancelable").Event = function() { return this.cancelable; };
$dynamic("set$cancelable").Event = function(value) { return this.cancelable = value; };
$dynamic("get$dartObjectLocalStorage").Event = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Event = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for EventException **************
$dynamic("get$name").EventException = function() { return this.name; };
$dynamic("set$name").EventException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").EventException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EventException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").EventException = function() {
  return this.toString();
};
// ********** Code for EventSource **************
$dynamic("get$dartObjectLocalStorage").EventSource = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EventSource = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").EventSource = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").EventSource = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").EventSource = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for EventTarget **************
$dynamic("get$dartObjectLocalStorage").EventTarget = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EventTarget = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").EventTarget = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").EventTarget = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").EventTarget = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for File **************
$dynamic("get$name").File = function() { return this.name; };
$dynamic("set$name").File = function(value) { return this.name = value; };
// ********** Code for FileEntry **************
// ********** Code for FileEntrySync **************
// ********** Code for FileError **************
$dynamic("get$dartObjectLocalStorage").FileError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for FileException **************
$dynamic("get$name").FileException = function() { return this.name; };
$dynamic("set$name").FileException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").FileException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").FileException = function() {
  return this.toString();
};
// ********** Code for FileList **************
$dynamic("get$length").FileList = function() { return this.length; };
$dynamic("set$length").FileList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").FileList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").FileList = function($0) {
  return this.item($0);
};
// ********** Code for FileReader **************
$dynamic("get$dartObjectLocalStorage").FileReader = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileReader = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for FileReaderSync **************
$dynamic("get$dartObjectLocalStorage").FileReaderSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileReaderSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for FileWriter **************
$dynamic("get$length").FileWriter = function() { return this.length; };
$dynamic("set$length").FileWriter = function(value) { return this.length = value; };
$dynamic("get$position").FileWriter = function() { return this.position; };
$dynamic("set$position").FileWriter = function(value) { return this.position = value; };
$dynamic("get$dartObjectLocalStorage").FileWriter = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileWriter = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for FileWriterSync **************
$dynamic("get$length").FileWriterSync = function() { return this.length; };
$dynamic("set$length").FileWriterSync = function(value) { return this.length = value; };
$dynamic("get$position").FileWriterSync = function() { return this.position; };
$dynamic("set$position").FileWriterSync = function(value) { return this.position = value; };
$dynamic("get$dartObjectLocalStorage").FileWriterSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileWriterSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Float32Array **************
$dynamic("get$length").Float32Array = function() { return this.length; };
$dynamic("set$length").Float32Array = function(value) { return this.length = value; };
// ********** Code for Float64Array **************
$dynamic("get$length").Float64Array = function() { return this.length; };
$dynamic("set$length").Float64Array = function(value) { return this.length = value; };
// ********** Code for Geolocation **************
$dynamic("get$dartObjectLocalStorage").Geolocation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Geolocation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Geoposition **************
$dynamic("get$dartObjectLocalStorage").Geoposition = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Geoposition = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for HTMLAllCollection **************
$dynamic("get$length").HTMLAllCollection = function() { return this.length; };
$dynamic("set$length").HTMLAllCollection = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").HTMLAllCollection = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").HTMLAllCollection = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").HTMLAllCollection = function($0) {
  return this.item($0);
};
// ********** Code for dom_HTMLAnchorElement **************
$dynamic("get$name").HTMLAnchorElement = function() { return this.name; };
$dynamic("set$name").HTMLAnchorElement = function(value) { return this.name = value; };
$dynamic("get$text").HTMLAnchorElement = function() { return this.text; };
$dynamic("set$text").HTMLAnchorElement = function(value) { return this.text = value; };
$dynamic("toString$0").HTMLAnchorElement = function() {
  return this.toString();
};
// ********** Code for dom_HTMLAppletElement **************
$dynamic("get$height").HTMLAppletElement = function() { return this.height; };
$dynamic("set$height").HTMLAppletElement = function(value) { return this.height = value; };
$dynamic("get$name").HTMLAppletElement = function() { return this.name; };
$dynamic("set$name").HTMLAppletElement = function(value) { return this.name = value; };
$dynamic("get$width").HTMLAppletElement = function() { return this.width; };
$dynamic("set$width").HTMLAppletElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLAreaElement **************
// ********** Code for dom_HTMLAudioElement **************
// ********** Code for dom_HTMLBRElement **************
// ********** Code for dom_HTMLBaseElement **************
// ********** Code for dom_HTMLBaseFontElement **************
$dynamic("get$color").HTMLBaseFontElement = function() { return this.color; };
$dynamic("set$color").HTMLBaseFontElement = function(value) { return this.color = value; };
// ********** Code for dom_HTMLBodyElement **************
$dynamic("get$text").HTMLBodyElement = function() { return this.text; };
$dynamic("set$text").HTMLBodyElement = function(value) { return this.text = value; };
// ********** Code for dom_HTMLButtonElement **************
$dynamic("get$name").HTMLButtonElement = function() { return this.name; };
$dynamic("set$name").HTMLButtonElement = function(value) { return this.name = value; };
$dynamic("get$value").HTMLButtonElement = function() { return this.value; };
$dynamic("set$value").HTMLButtonElement = function(value) { return this.value = value; };
$dynamic("get$click").HTMLButtonElement = function() {
  return this.click.bind(this);
}
$dynamic("click$0").HTMLButtonElement = function() {
  return this.click();
};
// ********** Code for dom_HTMLCanvasElement **************
$dynamic("get$height").HTMLCanvasElement = function() { return this.height; };
$dynamic("set$height").HTMLCanvasElement = function(value) { return this.height = value; };
$dynamic("get$width").HTMLCanvasElement = function() { return this.width; };
$dynamic("set$width").HTMLCanvasElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLCollection **************
$dynamic("get$length").HTMLCollection = function() { return this.length; };
$dynamic("set$length").HTMLCollection = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").HTMLCollection = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").HTMLCollection = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").HTMLCollection = function($0) {
  if (Object.getPrototypeOf(this).hasOwnProperty("item$1")) {
    return this.item($0);
  }
  return Object.prototype.item$1.call(this, $0);
};
// ********** Code for dom_HTMLDListElement **************
// ********** Code for dom_HTMLDataListElement **************
// ********** Code for dom_HTMLDetailsElement **************
// ********** Code for dom_HTMLDirectoryElement **************
// ********** Code for dom_HTMLDivElement **************
// ********** Code for dom_HTMLDocument **************
// ********** Code for dom_HTMLElement **************
// ********** Code for dom_HTMLEmbedElement **************
$dynamic("get$height").HTMLEmbedElement = function() { return this.height; };
$dynamic("set$height").HTMLEmbedElement = function(value) { return this.height = value; };
$dynamic("get$name").HTMLEmbedElement = function() { return this.name; };
$dynamic("set$name").HTMLEmbedElement = function(value) { return this.name = value; };
$dynamic("get$width").HTMLEmbedElement = function() { return this.width; };
$dynamic("set$width").HTMLEmbedElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLFieldSetElement **************
// ********** Code for dom_HTMLFontElement **************
$dynamic("get$color").HTMLFontElement = function() { return this.color; };
$dynamic("set$color").HTMLFontElement = function(value) { return this.color = value; };
// ********** Code for dom_HTMLFormElement **************
$dynamic("get$length").HTMLFormElement = function() { return this.length; };
$dynamic("set$length").HTMLFormElement = function(value) { return this.length = value; };
$dynamic("get$name").HTMLFormElement = function() { return this.name; };
$dynamic("set$name").HTMLFormElement = function(value) { return this.name = value; };
// ********** Code for dom_HTMLFrameElement **************
$dynamic("get$height").HTMLFrameElement = function() { return this.height; };
$dynamic("set$height").HTMLFrameElement = function(value) { return this.height = value; };
$dynamic("get$name").HTMLFrameElement = function() { return this.name; };
$dynamic("set$name").HTMLFrameElement = function(value) { return this.name = value; };
$dynamic("get$width").HTMLFrameElement = function() { return this.width; };
$dynamic("set$width").HTMLFrameElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLFrameSetElement **************
// ********** Code for dom_HTMLHRElement **************
$dynamic("get$width").HTMLHRElement = function() { return this.width; };
$dynamic("set$width").HTMLHRElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLHeadElement **************
// ********** Code for dom_HTMLHeadingElement **************
// ********** Code for dom_HTMLHtmlElement **************
// ********** Code for dom_HTMLIFrameElement **************
$dynamic("get$height").HTMLIFrameElement = function() { return this.height; };
$dynamic("set$height").HTMLIFrameElement = function(value) { return this.height = value; };
$dynamic("get$name").HTMLIFrameElement = function() { return this.name; };
$dynamic("set$name").HTMLIFrameElement = function(value) { return this.name = value; };
$dynamic("get$width").HTMLIFrameElement = function() { return this.width; };
$dynamic("set$width").HTMLIFrameElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLImageElement **************
$dynamic("get$height").HTMLImageElement = function() { return this.height; };
$dynamic("set$height").HTMLImageElement = function(value) { return this.height = value; };
$dynamic("get$name").HTMLImageElement = function() { return this.name; };
$dynamic("set$name").HTMLImageElement = function(value) { return this.name = value; };
$dynamic("get$width").HTMLImageElement = function() { return this.width; };
$dynamic("set$width").HTMLImageElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLInputElement **************
$dynamic("get$name").HTMLInputElement = function() { return this.name; };
$dynamic("set$name").HTMLInputElement = function(value) { return this.name = value; };
$dynamic("get$value").HTMLInputElement = function() { return this.value; };
$dynamic("set$value").HTMLInputElement = function(value) { return this.value = value; };
$dynamic("get$click").HTMLInputElement = function() {
  return this.click.bind(this);
}
$dynamic("click$0").HTMLInputElement = function() {
  return this.click();
};
// ********** Code for dom_HTMLIsIndexElement **************
// ********** Code for dom_HTMLKeygenElement **************
$dynamic("get$name").HTMLKeygenElement = function() { return this.name; };
$dynamic("set$name").HTMLKeygenElement = function(value) { return this.name = value; };
// ********** Code for dom_HTMLLIElement **************
$dynamic("get$value").HTMLLIElement = function() { return this.value; };
$dynamic("set$value").HTMLLIElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLLabelElement **************
// ********** Code for dom_HTMLLegendElement **************
// ********** Code for dom_HTMLLinkElement **************
// ********** Code for dom_HTMLMapElement **************
$dynamic("get$name").HTMLMapElement = function() { return this.name; };
$dynamic("set$name").HTMLMapElement = function(value) { return this.name = value; };
// ********** Code for dom_HTMLMarqueeElement **************
$dynamic("get$height").HTMLMarqueeElement = function() { return this.height; };
$dynamic("set$height").HTMLMarqueeElement = function(value) { return this.height = value; };
$dynamic("get$width").HTMLMarqueeElement = function() { return this.width; };
$dynamic("set$width").HTMLMarqueeElement = function(value) { return this.width = value; };
$dynamic("get$start").HTMLMarqueeElement = function() {
  return this.start.bind(this);
}
$dynamic("start$0").HTMLMarqueeElement = function() {
  return this.start();
};
// ********** Code for dom_HTMLMediaElement **************
// ********** Code for dom_HTMLMenuElement **************
// ********** Code for dom_HTMLMetaElement **************
$dynamic("get$content").HTMLMetaElement = function() { return this.content; };
$dynamic("set$content").HTMLMetaElement = function(value) { return this.content = value; };
$dynamic("get$name").HTMLMetaElement = function() { return this.name; };
$dynamic("set$name").HTMLMetaElement = function(value) { return this.name = value; };
// ********** Code for dom_HTMLMeterElement **************
$dynamic("get$value").HTMLMeterElement = function() { return this.value; };
$dynamic("set$value").HTMLMeterElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLModElement **************
// ********** Code for dom_HTMLOListElement **************
$dynamic("get$start").HTMLOListElement = function() { return this.start; };
$dynamic("set$start").HTMLOListElement = function(value) { return this.start = value; };
$dynamic("start$0").HTMLOListElement = function() {
  return this.start();
};
// ********** Code for dom_HTMLObjectElement **************
$dynamic("get$height").HTMLObjectElement = function() { return this.height; };
$dynamic("set$height").HTMLObjectElement = function(value) { return this.height = value; };
$dynamic("get$name").HTMLObjectElement = function() { return this.name; };
$dynamic("set$name").HTMLObjectElement = function(value) { return this.name = value; };
$dynamic("get$width").HTMLObjectElement = function() { return this.width; };
$dynamic("set$width").HTMLObjectElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLOptGroupElement **************
// ********** Code for dom_HTMLOptionElement **************
$dynamic("get$text").HTMLOptionElement = function() { return this.text; };
$dynamic("set$text").HTMLOptionElement = function(value) { return this.text = value; };
$dynamic("get$value").HTMLOptionElement = function() { return this.value; };
$dynamic("set$value").HTMLOptionElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLOptionsCollection **************
$dynamic("get$length").HTMLOptionsCollection = function() { return this.length; };
$dynamic("set$length").HTMLOptionsCollection = function(value) { return this.length = value; };
$dynamic("remove$1").HTMLOptionsCollection = function($0) {
  return this.remove($0);
};
// ********** Code for dom_HTMLOutputElement **************
$dynamic("get$name").HTMLOutputElement = function() { return this.name; };
$dynamic("set$name").HTMLOutputElement = function(value) { return this.name = value; };
$dynamic("get$value").HTMLOutputElement = function() { return this.value; };
$dynamic("set$value").HTMLOutputElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLParagraphElement **************
// ********** Code for dom_HTMLParamElement **************
$dynamic("get$name").HTMLParamElement = function() { return this.name; };
$dynamic("set$name").HTMLParamElement = function(value) { return this.name = value; };
$dynamic("get$value").HTMLParamElement = function() { return this.value; };
$dynamic("set$value").HTMLParamElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLPreElement **************
$dynamic("get$width").HTMLPreElement = function() { return this.width; };
$dynamic("set$width").HTMLPreElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLProgressElement **************
$dynamic("get$position").HTMLProgressElement = function() { return this.position; };
$dynamic("set$position").HTMLProgressElement = function(value) { return this.position = value; };
$dynamic("get$value").HTMLProgressElement = function() { return this.value; };
$dynamic("set$value").HTMLProgressElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLPropertiesCollection **************
$dynamic("get$length").HTMLPropertiesCollection = function() { return this.length; };
$dynamic("set$length").HTMLPropertiesCollection = function(value) { return this.length = value; };
$dynamic("item$1").HTMLPropertiesCollection = function($0) {
  return this.item($0);
};
// ********** Code for dom_HTMLQuoteElement **************
// ********** Code for dom_HTMLScriptElement **************
$dynamic("get$text").HTMLScriptElement = function() { return this.text; };
$dynamic("set$text").HTMLScriptElement = function(value) { return this.text = value; };
// ********** Code for dom_HTMLSelectElement **************
$dynamic("get$length").HTMLSelectElement = function() { return this.length; };
$dynamic("set$length").HTMLSelectElement = function(value) { return this.length = value; };
$dynamic("get$name").HTMLSelectElement = function() { return this.name; };
$dynamic("set$name").HTMLSelectElement = function(value) { return this.name = value; };
$dynamic("get$value").HTMLSelectElement = function() { return this.value; };
$dynamic("set$value").HTMLSelectElement = function(value) { return this.value = value; };
$dynamic("item$1").HTMLSelectElement = function($0) {
  return this.item($0);
};
$dynamic("remove$1").HTMLSelectElement = function($0) {
  return this.remove($0);
};
// ********** Code for dom_HTMLSourceElement **************
// ********** Code for dom_HTMLSpanElement **************
// ********** Code for dom_HTMLStyleElement **************
// ********** Code for dom_HTMLTableCaptionElement **************
// ********** Code for dom_HTMLTableCellElement **************
$dynamic("get$height").HTMLTableCellElement = function() { return this.height; };
$dynamic("set$height").HTMLTableCellElement = function(value) { return this.height = value; };
$dynamic("get$width").HTMLTableCellElement = function() { return this.width; };
$dynamic("set$width").HTMLTableCellElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLTableColElement **************
$dynamic("get$width").HTMLTableColElement = function() { return this.width; };
$dynamic("set$width").HTMLTableColElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLTableElement **************
$dynamic("get$width").HTMLTableElement = function() { return this.width; };
$dynamic("set$width").HTMLTableElement = function(value) { return this.width = value; };
// ********** Code for dom_HTMLTableRowElement **************
// ********** Code for dom_HTMLTableSectionElement **************
// ********** Code for dom_HTMLTextAreaElement **************
$dynamic("get$name").HTMLTextAreaElement = function() { return this.name; };
$dynamic("set$name").HTMLTextAreaElement = function(value) { return this.name = value; };
$dynamic("get$value").HTMLTextAreaElement = function() { return this.value; };
$dynamic("set$value").HTMLTextAreaElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLTitleElement **************
$dynamic("get$text").HTMLTitleElement = function() { return this.text; };
$dynamic("set$text").HTMLTitleElement = function(value) { return this.text = value; };
// ********** Code for dom_HTMLTrackElement **************
// ********** Code for dom_HTMLUListElement **************
// ********** Code for dom_HTMLUnknownElement **************
// ********** Code for dom_HTMLVideoElement **************
$dynamic("get$height").HTMLVideoElement = function() { return this.height; };
$dynamic("set$height").HTMLVideoElement = function(value) { return this.height = value; };
$dynamic("get$width").HTMLVideoElement = function() { return this.width; };
$dynamic("set$width").HTMLVideoElement = function(value) { return this.width = value; };
// ********** Code for HashChangeEvent **************
// ********** Code for HighPass2FilterNode **************
// ********** Code for History **************
$dynamic("get$length").History = function() { return this.length; };
$dynamic("set$length").History = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").History = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").History = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBAny **************
$dynamic("get$dartObjectLocalStorage").IDBAny = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBAny = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBCursor **************
$dynamic("get$dartObjectLocalStorage").IDBCursor = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBCursor = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBCursorWithValue **************
$dynamic("get$value").IDBCursorWithValue = function() { return this.value; };
$dynamic("set$value").IDBCursorWithValue = function(value) { return this.value = value; };
// ********** Code for IDBDatabase **************
$dynamic("get$name").IDBDatabase = function() { return this.name; };
$dynamic("set$name").IDBDatabase = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").IDBDatabase = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBDatabase = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").IDBDatabase = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").IDBDatabase = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").IDBDatabase = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for IDBDatabaseError **************
$dynamic("get$dartObjectLocalStorage").IDBDatabaseError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBDatabaseError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBDatabaseException **************
$dynamic("get$name").IDBDatabaseException = function() { return this.name; };
$dynamic("set$name").IDBDatabaseException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").IDBDatabaseException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBDatabaseException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").IDBDatabaseException = function() {
  return this.toString();
};
// ********** Code for IDBFactory **************
$dynamic("get$dartObjectLocalStorage").IDBFactory = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBFactory = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBIndex **************
$dynamic("get$name").IDBIndex = function() { return this.name; };
$dynamic("set$name").IDBIndex = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").IDBIndex = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBIndex = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBKey **************
$dynamic("get$dartObjectLocalStorage").IDBKey = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBKey = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBKeyRange **************
$dynamic("get$dartObjectLocalStorage").IDBKeyRange = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBKeyRange = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBObjectStore **************
$dynamic("get$name").IDBObjectStore = function() { return this.name; };
$dynamic("set$name").IDBObjectStore = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").IDBObjectStore = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBObjectStore = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("add$1").IDBObjectStore = function($0) {
  return this.add($0);
};
// ********** Code for IDBRequest **************
$dynamic("get$dartObjectLocalStorage").IDBRequest = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBRequest = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").IDBRequest = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").IDBRequest = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").IDBRequest = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for IDBTransaction **************
$dynamic("get$dartObjectLocalStorage").IDBTransaction = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBTransaction = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").IDBTransaction = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").IDBTransaction = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").IDBTransaction = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for IDBVersionChangeEvent **************
// ********** Code for IDBVersionChangeRequest **************
// ********** Code for ImageData **************
$dynamic("get$height").ImageData = function() { return this.height; };
$dynamic("set$height").ImageData = function(value) { return this.height = value; };
$dynamic("get$width").ImageData = function() { return this.width; };
$dynamic("set$width").ImageData = function(value) { return this.width = value; };
$dynamic("get$dartObjectLocalStorage").ImageData = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ImageData = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_InjectedScriptHost **************
$dynamic("get$dartObjectLocalStorage").InjectedScriptHost = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").InjectedScriptHost = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_InspectorFrontendHost **************
$dynamic("get$dartObjectLocalStorage").InspectorFrontendHost = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").InspectorFrontendHost = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Int16Array **************
$dynamic("get$length").Int16Array = function() { return this.length; };
$dynamic("set$length").Int16Array = function(value) { return this.length = value; };
// ********** Code for Int32Array **************
$dynamic("get$length").Int32Array = function() { return this.length; };
$dynamic("set$length").Int32Array = function(value) { return this.length = value; };
// ********** Code for Int8Array **************
$dynamic("get$length").Int8Array = function() { return this.length; };
$dynamic("set$length").Int8Array = function(value) { return this.length = value; };
// ********** Code for JavaScriptAudioNode **************
// ********** Code for dom_JavaScriptCallFrame **************
$dynamic("get$dartObjectLocalStorage").JavaScriptCallFrame = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").JavaScriptCallFrame = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for KeyboardEvent **************
// ********** Code for Location **************
$dynamic("get$dartObjectLocalStorage").Location = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Location = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").Location = function() {
  return this.toString();
};
// ********** Code for LowPass2FilterNode **************
// ********** Code for dom_MediaController **************
$dynamic("get$dartObjectLocalStorage").MediaController = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaController = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").MediaController = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").MediaController = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").MediaController = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for MediaElementAudioSourceNode **************
// ********** Code for MediaError **************
$dynamic("get$dartObjectLocalStorage").MediaError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MediaList **************
$dynamic("get$length").MediaList = function() { return this.length; };
$dynamic("set$length").MediaList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").MediaList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").MediaList = function($0) {
  return this.item($0);
};
// ********** Code for MediaQueryList **************
$dynamic("get$dartObjectLocalStorage").MediaQueryList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaQueryList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MediaQueryListListener **************
$dynamic("get$dartObjectLocalStorage").MediaQueryListListener = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaQueryListListener = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_MemoryInfo **************
$dynamic("get$dartObjectLocalStorage").MemoryInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MemoryInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MessageChannel **************
$dynamic("get$dartObjectLocalStorage").MessageChannel = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MessageChannel = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MessageEvent **************
// ********** Code for MessagePort **************
$dynamic("get$start").MessagePort = function() {
  return this.start.bind(this);
}
$dynamic("get$dartObjectLocalStorage").MessagePort = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MessagePort = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").MessagePort = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").MessagePort = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").MessagePort = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("start$0").MessagePort = function() {
  return this.start();
};
// ********** Code for Metadata **************
$dynamic("get$dartObjectLocalStorage").Metadata = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Metadata = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MouseEvent **************
// ********** Code for MutationCallback **************
$dynamic("get$dartObjectLocalStorage").MutationCallback = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MutationCallback = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MutationEvent **************
// ********** Code for MutationRecord **************
$dynamic("get$dartObjectLocalStorage").MutationRecord = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MutationRecord = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_NamedNodeMap **************
$dynamic("get$length").NamedNodeMap = function() { return this.length; };
$dynamic("set$length").NamedNodeMap = function(value) { return this.length = value; };
$dynamic("$setindex").NamedNodeMap = function(index, value) {
  $throw(new UnsupportedOperationException("Cannot assign element of immutable List."));
}
$dynamic("get$dartObjectLocalStorage").NamedNodeMap = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NamedNodeMap = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").NamedNodeMap = function($0) {
  return this.item($0);
};
// ********** Code for Navigator **************
$dynamic("get$dartObjectLocalStorage").Navigator = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Navigator = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Node **************
$dynamic("get$attributes").Node = function() { return this.attributes; };
$dynamic("set$attributes").Node = function(value) { return this.attributes = value; };
$dynamic("get$childNodes").Node = function() { return this.childNodes; };
$dynamic("set$childNodes").Node = function(value) { return this.childNodes = value; };
$dynamic("get$lastChild").Node = function() { return this.lastChild; };
$dynamic("set$lastChild").Node = function(value) { return this.lastChild = value; };
$dynamic("get$ownerDocument").Node = function() { return this.ownerDocument; };
$dynamic("set$ownerDocument").Node = function(value) { return this.ownerDocument = value; };
$dynamic("get$parentNode").Node = function() { return this.parentNode; };
$dynamic("set$parentNode").Node = function(value) { return this.parentNode = value; };
$dynamic("get$textContent").Node = function() { return this.textContent; };
$dynamic("set$textContent").Node = function(value) { return this.textContent = value; };
$dynamic("get$dartObjectLocalStorage").Node = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Node = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").Node = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").Node = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("appendChild$1").Node = function($0) {
  return this.appendChild($0);
};
$dynamic("hasChildNodes$0").Node = function() {
  return this.hasChildNodes();
};
$dynamic("removeChild$1").Node = function($0) {
  return this.removeChild($0);
};
$dynamic("removeEventListener$3").Node = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for dom_NodeFilter **************
$dynamic("get$dartObjectLocalStorage").NodeFilter = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NodeFilter = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_NodeIterator **************
$dynamic("get$dartObjectLocalStorage").NodeIterator = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NodeIterator = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for NodeList **************
$dynamic("get$length").NodeList = function() { return this.length; };
$dynamic("set$length").NodeList = function(value) { return this.length = value; };
$dynamic("$setindex").NodeList = function(index, value) {
  $throw(new UnsupportedOperationException("Cannot assign element of immutable List."));
}
$dynamic("get$dartObjectLocalStorage").NodeList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NodeList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").NodeList = function($0) {
  return this.item($0);
};
// ********** Code for dom_NodeSelector **************
$dynamic("get$dartObjectLocalStorage").NodeSelector = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NodeSelector = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("querySelector$1").NodeSelector = function($0) {
  return this.querySelector($0);
};
// ********** Code for Notation **************
// ********** Code for Notification **************
$dynamic("get$dartObjectLocalStorage").Notification = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Notification = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").Notification = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").Notification = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").Notification = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for NotificationCenter **************
$dynamic("get$dartObjectLocalStorage").NotificationCenter = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NotificationCenter = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for OESStandardDerivatives **************
$dynamic("get$dartObjectLocalStorage").OESStandardDerivatives = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").OESStandardDerivatives = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for OESTextureFloat **************
$dynamic("get$dartObjectLocalStorage").OESTextureFloat = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").OESTextureFloat = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for OESVertexArrayObject **************
$dynamic("get$dartObjectLocalStorage").OESVertexArrayObject = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").OESVertexArrayObject = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for OfflineAudioCompletionEvent **************
// ********** Code for OperationNotAllowedException **************
$dynamic("get$name").OperationNotAllowedException = function() { return this.name; };
$dynamic("set$name").OperationNotAllowedException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").OperationNotAllowedException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").OperationNotAllowedException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").OperationNotAllowedException = function() {
  return this.toString();
};
// ********** Code for OverflowEvent **************
// ********** Code for PageTransitionEvent **************
// ********** Code for dom_Performance **************
$dynamic("get$dartObjectLocalStorage").Performance = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Performance = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_PerformanceNavigation **************
$dynamic("get$dartObjectLocalStorage").PerformanceNavigation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").PerformanceNavigation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_PerformanceTiming **************
$dynamic("get$dartObjectLocalStorage").PerformanceTiming = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").PerformanceTiming = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_PointerLock **************
$dynamic("get$dartObjectLocalStorage").PointerLock = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").PointerLock = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for PopStateEvent **************
// ********** Code for PositionError **************
$dynamic("get$dartObjectLocalStorage").PositionError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").PositionError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ProcessingInstruction **************
// ********** Code for ProgressEvent **************
// ********** Code for RGBColor **************
$dynamic("get$dartObjectLocalStorage").RGBColor = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").RGBColor = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Range **************
$dynamic("get$dartObjectLocalStorage").Range = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Range = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("getBoundingClientRect$0").Range = function() {
  return this.getBoundingClientRect();
};
$dynamic("toString$0").Range = function() {
  return this.toString();
};
// ********** Code for RangeException **************
$dynamic("get$name").RangeException = function() { return this.name; };
$dynamic("set$name").RangeException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").RangeException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").RangeException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").RangeException = function() {
  return this.toString();
};
// ********** Code for RealtimeAnalyserNode **************
// ********** Code for Rect **************
$dynamic("get$bottom").Rect = function() { return this.bottom; };
$dynamic("set$bottom").Rect = function(value) { return this.bottom = value; };
$dynamic("get$left").Rect = function() { return this.left; };
$dynamic("set$left").Rect = function(value) { return this.left = value; };
$dynamic("get$right").Rect = function() { return this.right; };
$dynamic("set$right").Rect = function(value) { return this.right = value; };
$dynamic("get$top").Rect = function() { return this.top; };
$dynamic("set$top").Rect = function(value) { return this.top = value; };
$dynamic("get$dartObjectLocalStorage").Rect = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Rect = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLError **************
$dynamic("get$dartObjectLocalStorage").SQLError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLException **************
$dynamic("get$dartObjectLocalStorage").SQLException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLException = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLResultSet **************
$dynamic("get$dartObjectLocalStorage").SQLResultSet = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLResultSet = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLResultSetRowList **************
$dynamic("get$length").SQLResultSetRowList = function() { return this.length; };
$dynamic("set$length").SQLResultSetRowList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").SQLResultSetRowList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLResultSetRowList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").SQLResultSetRowList = function($0) {
  return this.item($0);
};
// ********** Code for dom_SQLTransaction **************
$dynamic("get$dartObjectLocalStorage").SQLTransaction = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLTransaction = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLTransactionSync **************
$dynamic("get$dartObjectLocalStorage").SQLTransactionSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLTransactionSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAElement **************
$dynamic("get$style").SVGAElement = function() { return this.style; };
$dynamic("set$style").SVGAElement = function(value) { return this.style = value; };
// ********** Code for SVGAltGlyphDefElement **************
// ********** Code for SVGAltGlyphElement **************
// ********** Code for SVGAltGlyphItemElement **************
// ********** Code for SVGAngle **************
$dynamic("get$value").SVGAngle = function() { return this.value; };
$dynamic("set$value").SVGAngle = function(value) { return this.value = value; };
$dynamic("get$dartObjectLocalStorage").SVGAngle = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAngle = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimateColorElement **************
// ********** Code for SVGAnimateElement **************
// ********** Code for SVGAnimateMotionElement **************
// ********** Code for SVGAnimateTransformElement **************
// ********** Code for SVGAnimatedAngle **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedAngle = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedAngle = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedBoolean **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedBoolean = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedBoolean = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedEnumeration **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedEnumeration = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedEnumeration = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedInteger **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedInteger = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedInteger = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedLength **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedLength = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedLength = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedLengthList **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedLengthList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedLengthList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedNumber **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedNumber = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedNumber = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedNumberList **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedNumberList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedNumberList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedPreserveAspectRatio **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedPreserveAspectRatio = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedPreserveAspectRatio = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedRect **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedRect = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedRect = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedString **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedString = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedString = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedTransformList **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedTransformList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedTransformList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimationElement **************
// ********** Code for SVGCircleElement **************
$dynamic("get$style").SVGCircleElement = function() { return this.style; };
$dynamic("set$style").SVGCircleElement = function(value) { return this.style = value; };
// ********** Code for SVGClipPathElement **************
$dynamic("get$style").SVGClipPathElement = function() { return this.style; };
$dynamic("set$style").SVGClipPathElement = function(value) { return this.style = value; };
// ********** Code for SVGColor **************
// ********** Code for SVGComponentTransferFunctionElement **************
// ********** Code for SVGCursorElement **************
// ********** Code for SVGDefsElement **************
$dynamic("get$style").SVGDefsElement = function() { return this.style; };
$dynamic("set$style").SVGDefsElement = function(value) { return this.style = value; };
// ********** Code for SVGDescElement **************
$dynamic("get$style").SVGDescElement = function() { return this.style; };
$dynamic("set$style").SVGDescElement = function(value) { return this.style = value; };
// ********** Code for SVGDocument **************
// ********** Code for SVGElement **************
// ********** Code for SVGElementInstance **************
$dynamic("get$childNodes").SVGElementInstance = function() { return this.childNodes; };
$dynamic("set$childNodes").SVGElementInstance = function(value) { return this.childNodes = value; };
$dynamic("get$lastChild").SVGElementInstance = function() { return this.lastChild; };
$dynamic("set$lastChild").SVGElementInstance = function(value) { return this.lastChild = value; };
$dynamic("get$parentNode").SVGElementInstance = function() { return this.parentNode; };
$dynamic("set$parentNode").SVGElementInstance = function(value) { return this.parentNode = value; };
$dynamic("get$dartObjectLocalStorage").SVGElementInstance = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGElementInstance = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").SVGElementInstance = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").SVGElementInstance = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").SVGElementInstance = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for SVGElementInstanceList **************
$dynamic("get$length").SVGElementInstanceList = function() { return this.length; };
$dynamic("set$length").SVGElementInstanceList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").SVGElementInstanceList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGElementInstanceList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").SVGElementInstanceList = function($0) {
  return this.item($0);
};
// ********** Code for SVGEllipseElement **************
$dynamic("get$style").SVGEllipseElement = function() { return this.style; };
$dynamic("set$style").SVGEllipseElement = function(value) { return this.style = value; };
// ********** Code for SVGException **************
$dynamic("get$name").SVGException = function() { return this.name; };
$dynamic("set$name").SVGException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").SVGException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").SVGException = function() {
  return this.toString();
};
// ********** Code for SVGExternalResourcesRequired **************
$dynamic("get$dartObjectLocalStorage").SVGExternalResourcesRequired = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGExternalResourcesRequired = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGFEBlendElement **************
$dynamic("get$height").SVGFEBlendElement = function() { return this.height; };
$dynamic("set$height").SVGFEBlendElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEBlendElement = function() { return this.width; };
$dynamic("set$width").SVGFEBlendElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEBlendElement = function() { return this.style; };
$dynamic("set$style").SVGFEBlendElement = function(value) { return this.style = value; };
// ********** Code for SVGFEColorMatrixElement **************
$dynamic("get$height").SVGFEColorMatrixElement = function() { return this.height; };
$dynamic("set$height").SVGFEColorMatrixElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEColorMatrixElement = function() { return this.width; };
$dynamic("set$width").SVGFEColorMatrixElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEColorMatrixElement = function() { return this.style; };
$dynamic("set$style").SVGFEColorMatrixElement = function(value) { return this.style = value; };
// ********** Code for SVGFEComponentTransferElement **************
$dynamic("get$height").SVGFEComponentTransferElement = function() { return this.height; };
$dynamic("set$height").SVGFEComponentTransferElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEComponentTransferElement = function() { return this.width; };
$dynamic("set$width").SVGFEComponentTransferElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEComponentTransferElement = function() { return this.style; };
$dynamic("set$style").SVGFEComponentTransferElement = function(value) { return this.style = value; };
// ********** Code for dom_SVGFECompositeElement **************
$dynamic("get$height").SVGFECompositeElement = function() { return this.height; };
$dynamic("set$height").SVGFECompositeElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFECompositeElement = function() { return this.width; };
$dynamic("set$width").SVGFECompositeElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFECompositeElement = function() { return this.style; };
$dynamic("set$style").SVGFECompositeElement = function(value) { return this.style = value; };
// ********** Code for SVGFEConvolveMatrixElement **************
$dynamic("get$height").SVGFEConvolveMatrixElement = function() { return this.height; };
$dynamic("set$height").SVGFEConvolveMatrixElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEConvolveMatrixElement = function() { return this.width; };
$dynamic("set$width").SVGFEConvolveMatrixElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEConvolveMatrixElement = function() { return this.style; };
$dynamic("set$style").SVGFEConvolveMatrixElement = function(value) { return this.style = value; };
// ********** Code for SVGFEDiffuseLightingElement **************
$dynamic("get$height").SVGFEDiffuseLightingElement = function() { return this.height; };
$dynamic("set$height").SVGFEDiffuseLightingElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEDiffuseLightingElement = function() { return this.width; };
$dynamic("set$width").SVGFEDiffuseLightingElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEDiffuseLightingElement = function() { return this.style; };
$dynamic("set$style").SVGFEDiffuseLightingElement = function(value) { return this.style = value; };
// ********** Code for SVGFEDisplacementMapElement **************
$dynamic("get$height").SVGFEDisplacementMapElement = function() { return this.height; };
$dynamic("set$height").SVGFEDisplacementMapElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEDisplacementMapElement = function() { return this.width; };
$dynamic("set$width").SVGFEDisplacementMapElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEDisplacementMapElement = function() { return this.style; };
$dynamic("set$style").SVGFEDisplacementMapElement = function(value) { return this.style = value; };
// ********** Code for SVGFEDistantLightElement **************
// ********** Code for SVGFEDropShadowElement **************
$dynamic("get$height").SVGFEDropShadowElement = function() { return this.height; };
$dynamic("set$height").SVGFEDropShadowElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEDropShadowElement = function() { return this.width; };
$dynamic("set$width").SVGFEDropShadowElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEDropShadowElement = function() { return this.style; };
$dynamic("set$style").SVGFEDropShadowElement = function(value) { return this.style = value; };
// ********** Code for SVGFEFloodElement **************
$dynamic("get$height").SVGFEFloodElement = function() { return this.height; };
$dynamic("set$height").SVGFEFloodElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEFloodElement = function() { return this.width; };
$dynamic("set$width").SVGFEFloodElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEFloodElement = function() { return this.style; };
$dynamic("set$style").SVGFEFloodElement = function(value) { return this.style = value; };
// ********** Code for SVGFEFuncAElement **************
// ********** Code for SVGFEFuncBElement **************
// ********** Code for SVGFEFuncGElement **************
// ********** Code for SVGFEFuncRElement **************
// ********** Code for SVGFEGaussianBlurElement **************
$dynamic("get$height").SVGFEGaussianBlurElement = function() { return this.height; };
$dynamic("set$height").SVGFEGaussianBlurElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEGaussianBlurElement = function() { return this.width; };
$dynamic("set$width").SVGFEGaussianBlurElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEGaussianBlurElement = function() { return this.style; };
$dynamic("set$style").SVGFEGaussianBlurElement = function(value) { return this.style = value; };
// ********** Code for SVGFEImageElement **************
$dynamic("get$height").SVGFEImageElement = function() { return this.height; };
$dynamic("set$height").SVGFEImageElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEImageElement = function() { return this.width; };
$dynamic("set$width").SVGFEImageElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEImageElement = function() { return this.style; };
$dynamic("set$style").SVGFEImageElement = function(value) { return this.style = value; };
// ********** Code for SVGFEMergeElement **************
$dynamic("get$height").SVGFEMergeElement = function() { return this.height; };
$dynamic("set$height").SVGFEMergeElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEMergeElement = function() { return this.width; };
$dynamic("set$width").SVGFEMergeElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEMergeElement = function() { return this.style; };
$dynamic("set$style").SVGFEMergeElement = function(value) { return this.style = value; };
// ********** Code for SVGFEMergeNodeElement **************
// ********** Code for dom_SVGFEMorphologyElement **************
$dynamic("get$height").SVGFEMorphologyElement = function() { return this.height; };
$dynamic("set$height").SVGFEMorphologyElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEMorphologyElement = function() { return this.width; };
$dynamic("set$width").SVGFEMorphologyElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEMorphologyElement = function() { return this.style; };
$dynamic("set$style").SVGFEMorphologyElement = function(value) { return this.style = value; };
// ********** Code for SVGFEOffsetElement **************
$dynamic("get$height").SVGFEOffsetElement = function() { return this.height; };
$dynamic("set$height").SVGFEOffsetElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFEOffsetElement = function() { return this.width; };
$dynamic("set$width").SVGFEOffsetElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFEOffsetElement = function() { return this.style; };
$dynamic("set$style").SVGFEOffsetElement = function(value) { return this.style = value; };
// ********** Code for SVGFEPointLightElement **************
// ********** Code for SVGFESpecularLightingElement **************
$dynamic("get$height").SVGFESpecularLightingElement = function() { return this.height; };
$dynamic("set$height").SVGFESpecularLightingElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFESpecularLightingElement = function() { return this.width; };
$dynamic("set$width").SVGFESpecularLightingElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFESpecularLightingElement = function() { return this.style; };
$dynamic("set$style").SVGFESpecularLightingElement = function(value) { return this.style = value; };
// ********** Code for SVGFESpotLightElement **************
// ********** Code for SVGFETileElement **************
$dynamic("get$height").SVGFETileElement = function() { return this.height; };
$dynamic("set$height").SVGFETileElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFETileElement = function() { return this.width; };
$dynamic("set$width").SVGFETileElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFETileElement = function() { return this.style; };
$dynamic("set$style").SVGFETileElement = function(value) { return this.style = value; };
// ********** Code for SVGFETurbulenceElement **************
$dynamic("get$height").SVGFETurbulenceElement = function() { return this.height; };
$dynamic("set$height").SVGFETurbulenceElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFETurbulenceElement = function() { return this.width; };
$dynamic("set$width").SVGFETurbulenceElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFETurbulenceElement = function() { return this.style; };
$dynamic("set$style").SVGFETurbulenceElement = function(value) { return this.style = value; };
// ********** Code for SVGFilterElement **************
$dynamic("get$height").SVGFilterElement = function() { return this.height; };
$dynamic("set$height").SVGFilterElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGFilterElement = function() { return this.width; };
$dynamic("set$width").SVGFilterElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGFilterElement = function() { return this.style; };
$dynamic("set$style").SVGFilterElement = function(value) { return this.style = value; };
// ********** Code for SVGFilterPrimitiveStandardAttributes **************
$dynamic("get$height").SVGFilterPrimitiveStandardAttributes = function() { return this.height; };
$dynamic("set$height").SVGFilterPrimitiveStandardAttributes = function(value) { return this.height = value; };
$dynamic("get$width").SVGFilterPrimitiveStandardAttributes = function() { return this.width; };
$dynamic("set$width").SVGFilterPrimitiveStandardAttributes = function(value) { return this.width = value; };
// ********** Code for SVGFitToViewBox **************
$dynamic("get$dartObjectLocalStorage").SVGFitToViewBox = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGFitToViewBox = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGFontElement **************
// ********** Code for SVGFontFaceElement **************
// ********** Code for SVGFontFaceFormatElement **************
// ********** Code for SVGFontFaceNameElement **************
// ********** Code for SVGFontFaceSrcElement **************
// ********** Code for SVGFontFaceUriElement **************
// ********** Code for SVGForeignObjectElement **************
$dynamic("get$height").SVGForeignObjectElement = function() { return this.height; };
$dynamic("set$height").SVGForeignObjectElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGForeignObjectElement = function() { return this.width; };
$dynamic("set$width").SVGForeignObjectElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGForeignObjectElement = function() { return this.style; };
$dynamic("set$style").SVGForeignObjectElement = function(value) { return this.style = value; };
// ********** Code for SVGGElement **************
$dynamic("get$style").SVGGElement = function() { return this.style; };
$dynamic("set$style").SVGGElement = function(value) { return this.style = value; };
// ********** Code for SVGGlyphElement **************
// ********** Code for SVGGlyphRefElement **************
$dynamic("get$style").SVGGlyphRefElement = function() { return this.style; };
$dynamic("set$style").SVGGlyphRefElement = function(value) { return this.style = value; };
// ********** Code for SVGGradientElement **************
$dynamic("get$style").SVGGradientElement = function() { return this.style; };
$dynamic("set$style").SVGGradientElement = function(value) { return this.style = value; };
// ********** Code for SVGHKernElement **************
// ********** Code for SVGImageElement **************
$dynamic("get$height").SVGImageElement = function() { return this.height; };
$dynamic("set$height").SVGImageElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGImageElement = function() { return this.width; };
$dynamic("set$width").SVGImageElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGImageElement = function() { return this.style; };
$dynamic("set$style").SVGImageElement = function(value) { return this.style = value; };
// ********** Code for SVGLangSpace **************
$dynamic("get$dartObjectLocalStorage").SVGLangSpace = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGLangSpace = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGLength **************
$dynamic("get$value").SVGLength = function() { return this.value; };
$dynamic("set$value").SVGLength = function(value) { return this.value = value; };
$dynamic("get$dartObjectLocalStorage").SVGLength = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGLength = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGLengthList **************
$dynamic("get$dartObjectLocalStorage").SVGLengthList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGLengthList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGLineElement **************
$dynamic("get$style").SVGLineElement = function() { return this.style; };
$dynamic("set$style").SVGLineElement = function(value) { return this.style = value; };
// ********** Code for SVGLinearGradientElement **************
// ********** Code for SVGLocatable **************
$dynamic("get$dartObjectLocalStorage").SVGLocatable = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGLocatable = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGMPathElement **************
// ********** Code for SVGMarkerElement **************
$dynamic("get$style").SVGMarkerElement = function() { return this.style; };
$dynamic("set$style").SVGMarkerElement = function(value) { return this.style = value; };
// ********** Code for SVGMaskElement **************
$dynamic("get$height").SVGMaskElement = function() { return this.height; };
$dynamic("set$height").SVGMaskElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGMaskElement = function() { return this.width; };
$dynamic("set$width").SVGMaskElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGMaskElement = function() { return this.style; };
$dynamic("set$style").SVGMaskElement = function(value) { return this.style = value; };
// ********** Code for SVGMatrix **************
$dynamic("get$dartObjectLocalStorage").SVGMatrix = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGMatrix = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGMetadataElement **************
// ********** Code for SVGMissingGlyphElement **************
// ********** Code for SVGNumber **************
$dynamic("get$value").SVGNumber = function() { return this.value; };
$dynamic("set$value").SVGNumber = function(value) { return this.value = value; };
$dynamic("get$dartObjectLocalStorage").SVGNumber = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGNumber = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGNumberList **************
$dynamic("get$dartObjectLocalStorage").SVGNumberList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGNumberList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGPaint **************
// ********** Code for SVGPathElement **************
$dynamic("get$style").SVGPathElement = function() { return this.style; };
$dynamic("set$style").SVGPathElement = function(value) { return this.style = value; };
// ********** Code for SVGPathSeg **************
$dynamic("get$dartObjectLocalStorage").SVGPathSeg = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPathSeg = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGPathSegArcAbs **************
// ********** Code for SVGPathSegArcRel **************
// ********** Code for SVGPathSegClosePath **************
// ********** Code for SVGPathSegCurvetoCubicAbs **************
// ********** Code for SVGPathSegCurvetoCubicRel **************
// ********** Code for SVGPathSegCurvetoCubicSmoothAbs **************
// ********** Code for SVGPathSegCurvetoCubicSmoothRel **************
// ********** Code for SVGPathSegCurvetoQuadraticAbs **************
// ********** Code for SVGPathSegCurvetoQuadraticRel **************
// ********** Code for SVGPathSegCurvetoQuadraticSmoothAbs **************
// ********** Code for SVGPathSegCurvetoQuadraticSmoothRel **************
// ********** Code for SVGPathSegLinetoAbs **************
// ********** Code for SVGPathSegLinetoHorizontalAbs **************
// ********** Code for SVGPathSegLinetoHorizontalRel **************
// ********** Code for SVGPathSegLinetoRel **************
// ********** Code for SVGPathSegLinetoVerticalAbs **************
// ********** Code for SVGPathSegLinetoVerticalRel **************
// ********** Code for SVGPathSegList **************
$dynamic("get$dartObjectLocalStorage").SVGPathSegList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPathSegList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGPathSegMovetoAbs **************
// ********** Code for SVGPathSegMovetoRel **************
// ********** Code for SVGPatternElement **************
$dynamic("get$height").SVGPatternElement = function() { return this.height; };
$dynamic("set$height").SVGPatternElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGPatternElement = function() { return this.width; };
$dynamic("set$width").SVGPatternElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGPatternElement = function() { return this.style; };
$dynamic("set$style").SVGPatternElement = function(value) { return this.style = value; };
// ********** Code for SVGPoint **************
$dynamic("get$dartObjectLocalStorage").SVGPoint = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPoint = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGPointList **************
$dynamic("get$dartObjectLocalStorage").SVGPointList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPointList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGPolygonElement **************
$dynamic("get$style").SVGPolygonElement = function() { return this.style; };
$dynamic("set$style").SVGPolygonElement = function(value) { return this.style = value; };
// ********** Code for SVGPolylineElement **************
$dynamic("get$style").SVGPolylineElement = function() { return this.style; };
$dynamic("set$style").SVGPolylineElement = function(value) { return this.style = value; };
// ********** Code for SVGPreserveAspectRatio **************
$dynamic("get$dartObjectLocalStorage").SVGPreserveAspectRatio = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPreserveAspectRatio = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGRadialGradientElement **************
// ********** Code for SVGRect **************
$dynamic("get$height").SVGRect = function() { return this.height; };
$dynamic("set$height").SVGRect = function(value) { return this.height = value; };
$dynamic("get$width").SVGRect = function() { return this.width; };
$dynamic("set$width").SVGRect = function(value) { return this.width = value; };
$dynamic("get$dartObjectLocalStorage").SVGRect = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGRect = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGRectElement **************
$dynamic("get$height").SVGRectElement = function() { return this.height; };
$dynamic("set$height").SVGRectElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGRectElement = function() { return this.width; };
$dynamic("set$width").SVGRectElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGRectElement = function() { return this.style; };
$dynamic("set$style").SVGRectElement = function(value) { return this.style = value; };
// ********** Code for SVGRenderingIntent **************
$dynamic("get$dartObjectLocalStorage").SVGRenderingIntent = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGRenderingIntent = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGSVGElement **************
$dynamic("get$height").SVGSVGElement = function() { return this.height; };
$dynamic("set$height").SVGSVGElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGSVGElement = function() { return this.width; };
$dynamic("set$width").SVGSVGElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGSVGElement = function() { return this.style; };
$dynamic("set$style").SVGSVGElement = function(value) { return this.style = value; };
// ********** Code for SVGScriptElement **************
// ********** Code for SVGSetElement **************
// ********** Code for SVGStopElement **************
$dynamic("get$style").SVGStopElement = function() { return this.style; };
$dynamic("set$style").SVGStopElement = function(value) { return this.style = value; };
// ********** Code for SVGStringList **************
$dynamic("get$dartObjectLocalStorage").SVGStringList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGStringList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGStylable **************
$dynamic("get$style").SVGStylable = function() { return this.style; };
$dynamic("set$style").SVGStylable = function(value) { return this.style = value; };
$dynamic("get$dartObjectLocalStorage").SVGStylable = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGStylable = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGStyleElement **************
// ********** Code for SVGSwitchElement **************
$dynamic("get$style").SVGSwitchElement = function() { return this.style; };
$dynamic("set$style").SVGSwitchElement = function(value) { return this.style = value; };
// ********** Code for SVGSymbolElement **************
$dynamic("get$style").SVGSymbolElement = function() { return this.style; };
$dynamic("set$style").SVGSymbolElement = function(value) { return this.style = value; };
// ********** Code for SVGTRefElement **************
// ********** Code for SVGTSpanElement **************
// ********** Code for SVGTests **************
$dynamic("get$dartObjectLocalStorage").SVGTests = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGTests = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGTextContentElement **************
$dynamic("get$style").SVGTextContentElement = function() { return this.style; };
$dynamic("set$style").SVGTextContentElement = function(value) { return this.style = value; };
// ********** Code for SVGTextElement **************
// ********** Code for SVGTextPathElement **************
// ********** Code for SVGTextPositioningElement **************
// ********** Code for SVGTitleElement **************
$dynamic("get$style").SVGTitleElement = function() { return this.style; };
$dynamic("set$style").SVGTitleElement = function(value) { return this.style = value; };
// ********** Code for SVGTransform **************
$dynamic("get$dartObjectLocalStorage").SVGTransform = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGTransform = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGTransformList **************
$dynamic("get$dartObjectLocalStorage").SVGTransformList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGTransformList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGTransformable **************
// ********** Code for SVGURIReference **************
$dynamic("get$dartObjectLocalStorage").SVGURIReference = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGURIReference = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGUnitTypes **************
$dynamic("get$dartObjectLocalStorage").SVGUnitTypes = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGUnitTypes = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGUseElement **************
$dynamic("get$height").SVGUseElement = function() { return this.height; };
$dynamic("set$height").SVGUseElement = function(value) { return this.height = value; };
$dynamic("get$width").SVGUseElement = function() { return this.width; };
$dynamic("set$width").SVGUseElement = function(value) { return this.width = value; };
$dynamic("get$style").SVGUseElement = function() { return this.style; };
$dynamic("set$style").SVGUseElement = function(value) { return this.style = value; };
// ********** Code for SVGVKernElement **************
// ********** Code for SVGViewElement **************
// ********** Code for SVGViewSpec **************
// ********** Code for SVGZoomAndPan **************
$dynamic("get$dartObjectLocalStorage").SVGZoomAndPan = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGZoomAndPan = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGZoomEvent **************
// ********** Code for Screen **************
$dynamic("get$height").Screen = function() { return this.height; };
$dynamic("set$height").Screen = function(value) { return this.height = value; };
$dynamic("get$width").Screen = function() { return this.width; };
$dynamic("set$width").Screen = function(value) { return this.width = value; };
$dynamic("get$dartObjectLocalStorage").Screen = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Screen = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_ScriptProfile **************
$dynamic("get$dartObjectLocalStorage").ScriptProfile = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ScriptProfile = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_ScriptProfileNode **************
$dynamic("get$dartObjectLocalStorage").ScriptProfileNode = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ScriptProfileNode = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SharedWorker **************
// ********** Code for dom_SharedWorkercontext **************
$dynamic("get$name").SharedWorkercontext = function() { return this.name; };
$dynamic("set$name").SharedWorkercontext = function(value) { return this.name = value; };
// ********** Code for SpeechInputEvent **************
// ********** Code for SpeechInputResult **************
$dynamic("get$dartObjectLocalStorage").SpeechInputResult = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SpeechInputResult = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SpeechInputResultList **************
$dynamic("get$length").SpeechInputResultList = function() { return this.length; };
$dynamic("set$length").SpeechInputResultList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").SpeechInputResultList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SpeechInputResultList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").SpeechInputResultList = function($0) {
  return this.item($0);
};
// ********** Code for Storage **************
$dynamic("get$length").Storage = function() { return this.length; };
$dynamic("set$length").Storage = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").Storage = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Storage = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for StorageEvent **************
// ********** Code for StorageInfo **************
$dynamic("get$dartObjectLocalStorage").StorageInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").StorageInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for StyleMedia **************
$dynamic("get$dartObjectLocalStorage").StyleMedia = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").StyleMedia = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for StyleSheet **************
$dynamic("get$dartObjectLocalStorage").StyleSheet = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").StyleSheet = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for StyleSheetList **************
$dynamic("get$length").StyleSheetList = function() { return this.length; };
$dynamic("set$length").StyleSheetList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").StyleSheetList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").StyleSheetList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").StyleSheetList = function($0) {
  return this.item($0);
};
// ********** Code for Text **************
// ********** Code for TextEvent **************
// ********** Code for TextMetrics **************
$dynamic("get$width").TextMetrics = function() { return this.width; };
$dynamic("set$width").TextMetrics = function(value) { return this.width = value; };
$dynamic("get$dartObjectLocalStorage").TextMetrics = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextMetrics = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for TextTrack **************
$dynamic("get$dartObjectLocalStorage").TextTrack = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextTrack = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").TextTrack = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").TextTrack = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").TextTrack = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for TextTrackCue **************
$dynamic("get$dartObjectLocalStorage").TextTrackCue = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextTrackCue = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").TextTrackCue = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").TextTrackCue = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").TextTrackCue = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for TextTrackCueList **************
$dynamic("get$length").TextTrackCueList = function() { return this.length; };
$dynamic("set$length").TextTrackCueList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").TextTrackCueList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextTrackCueList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").TextTrackCueList = function($0) {
  return this.item($0);
};
// ********** Code for dom_TextTrackList **************
$dynamic("get$length").TextTrackList = function() { return this.length; };
$dynamic("set$length").TextTrackList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").TextTrackList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextTrackList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").TextTrackList = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").TextTrackList = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("item$1").TextTrackList = function($0) {
  return this.item($0);
};
$dynamic("removeEventListener$3").TextTrackList = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for TimeRanges **************
$dynamic("get$length").TimeRanges = function() { return this.length; };
$dynamic("set$length").TimeRanges = function(value) { return this.length = value; };
$dynamic("get$start").TimeRanges = function() {
  return this.start.bind(this);
}
$dynamic("get$dartObjectLocalStorage").TimeRanges = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TimeRanges = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Touch **************
$dynamic("get$pageX").Touch = function() { return this.pageX; };
$dynamic("set$pageX").Touch = function(value) { return this.pageX = value; };
$dynamic("get$pageY").Touch = function() { return this.pageY; };
$dynamic("set$pageY").Touch = function(value) { return this.pageY = value; };
$dynamic("get$dartObjectLocalStorage").Touch = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Touch = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for TouchEvent **************
// ********** Code for TouchList **************
$dynamic("get$length").TouchList = function() { return this.length; };
$dynamic("set$length").TouchList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").TouchList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TouchList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").TouchList = function($0) {
  return this.item($0);
};
// ********** Code for dom_TrackEvent **************
// ********** Code for dom_TreeWalker **************
$dynamic("get$lastChild").TreeWalker = function() {
  return this.lastChild.bind(this);
}
$dynamic("get$parentNode").TreeWalker = function() {
  return this.parentNode.bind(this);
}
$dynamic("get$dartObjectLocalStorage").TreeWalker = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TreeWalker = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for UIEvent **************
$dynamic("get$pageX").UIEvent = function() { return this.pageX; };
$dynamic("set$pageX").UIEvent = function(value) { return this.pageX = value; };
$dynamic("get$pageY").UIEvent = function() { return this.pageY; };
$dynamic("set$pageY").UIEvent = function(value) { return this.pageY = value; };
// ********** Code for Uint16Array **************
$dynamic("get$length").Uint16Array = function() { return this.length; };
$dynamic("set$length").Uint16Array = function(value) { return this.length = value; };
// ********** Code for Uint32Array **************
$dynamic("get$length").Uint32Array = function() { return this.length; };
$dynamic("set$length").Uint32Array = function(value) { return this.length = value; };
// ********** Code for Uint8Array **************
$dynamic("get$length").Uint8Array = function() { return this.length; };
$dynamic("set$length").Uint8Array = function(value) { return this.length = value; };
// ********** Code for ValidityState **************
$dynamic("get$dartObjectLocalStorage").ValidityState = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ValidityState = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WaveShaperNode **************
// ********** Code for WebGLActiveInfo **************
$dynamic("get$name").WebGLActiveInfo = function() { return this.name; };
$dynamic("set$name").WebGLActiveInfo = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").WebGLActiveInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLActiveInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLBuffer **************
$dynamic("get$dartObjectLocalStorage").WebGLBuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLBuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebGLCompressedTextures **************
$dynamic("get$dartObjectLocalStorage").WebGLCompressedTextures = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLCompressedTextures = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLContextAttributes **************
$dynamic("get$dartObjectLocalStorage").WebGLContextAttributes = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLContextAttributes = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLContextEvent **************
// ********** Code for WebGLDebugRendererInfo **************
$dynamic("get$dartObjectLocalStorage").WebGLDebugRendererInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLDebugRendererInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLDebugShaders **************
$dynamic("get$dartObjectLocalStorage").WebGLDebugShaders = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLDebugShaders = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLFramebuffer **************
$dynamic("get$dartObjectLocalStorage").WebGLFramebuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLFramebuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebGLLoseContext **************
$dynamic("get$dartObjectLocalStorage").WebGLLoseContext = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLLoseContext = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLProgram **************
$dynamic("get$dartObjectLocalStorage").WebGLProgram = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLProgram = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLRenderbuffer **************
$dynamic("get$dartObjectLocalStorage").WebGLRenderbuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLRenderbuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLRenderingContext **************
// ********** Code for WebGLShader **************
$dynamic("get$dartObjectLocalStorage").WebGLShader = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLShader = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLTexture **************
$dynamic("get$dartObjectLocalStorage").WebGLTexture = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLTexture = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLUniformLocation **************
$dynamic("get$dartObjectLocalStorage").WebGLUniformLocation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLUniformLocation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLVertexArrayObjectOES **************
$dynamic("get$dartObjectLocalStorage").WebGLVertexArrayObjectOES = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLVertexArrayObjectOES = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitAnimation **************
$dynamic("get$name").WebKitAnimation = function() { return this.name; };
$dynamic("set$name").WebKitAnimation = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").WebKitAnimation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitAnimation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitAnimationEvent **************
// ********** Code for dom_WebKitAnimationList **************
$dynamic("get$length").WebKitAnimationList = function() { return this.length; };
$dynamic("set$length").WebKitAnimationList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").WebKitAnimationList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitAnimationList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("item$1").WebKitAnimationList = function($0) {
  return this.item($0);
};
// ********** Code for dom_WebKitBlobBuilder **************
$dynamic("get$dartObjectLocalStorage").WebKitBlobBuilder = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitBlobBuilder = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebKitCSSFilterValue **************
// ********** Code for dom_WebKitCSSKeyframeRule **************
$dynamic("get$style").WebKitCSSKeyframeRule = function() { return this.style; };
$dynamic("set$style").WebKitCSSKeyframeRule = function(value) { return this.style = value; };
// ********** Code for dom_WebKitCSSKeyframesRule **************
$dynamic("get$name").WebKitCSSKeyframesRule = function() { return this.name; };
$dynamic("set$name").WebKitCSSKeyframesRule = function(value) { return this.name = value; };
// ********** Code for dom_WebKitCSSMatrix **************
$dynamic("get$dartObjectLocalStorage").WebKitCSSMatrix = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitCSSMatrix = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").WebKitCSSMatrix = function() {
  return this.toString();
};
// ********** Code for dom_WebKitCSSTransformValue **************
// ********** Code for dom_WebKitFlags **************
$dynamic("get$dartObjectLocalStorage").WebKitFlags = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitFlags = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebKitMutationObserver **************
$dynamic("get$dartObjectLocalStorage").WebKitMutationObserver = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitMutationObserver = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitNamedFlow **************
$dynamic("get$dartObjectLocalStorage").WebKitNamedFlow = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitNamedFlow = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitPoint **************
$dynamic("get$dartObjectLocalStorage").WebKitPoint = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitPoint = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitTransitionEvent **************
// ********** Code for WebSocket **************
$dynamic("get$dartObjectLocalStorage").WebSocket = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebSocket = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").WebSocket = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").WebSocket = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").WebSocket = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for WheelEvent **************
// ********** Code for Worker **************
// ********** Code for dom_WorkerContext **************
$dynamic("get$dartObjectLocalStorage").WorkerContext = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WorkerContext = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").WorkerContext = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").WorkerContext = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").WorkerContext = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for dom_WorkerLocation **************
$dynamic("get$dartObjectLocalStorage").WorkerLocation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WorkerLocation = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").WorkerLocation = function() {
  return this.toString();
};
// ********** Code for dom_WorkerNavigator **************
$dynamic("get$dartObjectLocalStorage").WorkerNavigator = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WorkerNavigator = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for XMLHttpRequest **************
$dynamic("get$dartObjectLocalStorage").XMLHttpRequest = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XMLHttpRequest = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").XMLHttpRequest = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").XMLHttpRequest = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").XMLHttpRequest = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for XMLHttpRequestException **************
$dynamic("get$name").XMLHttpRequestException = function() { return this.name; };
$dynamic("set$name").XMLHttpRequestException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").XMLHttpRequestException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XMLHttpRequestException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").XMLHttpRequestException = function() {
  return this.toString();
};
// ********** Code for XMLHttpRequestProgressEvent **************
$dynamic("get$position").XMLHttpRequestProgressEvent = function() { return this.position; };
$dynamic("set$position").XMLHttpRequestProgressEvent = function(value) { return this.position = value; };
// ********** Code for XMLHttpRequestUpload **************
$dynamic("get$dartObjectLocalStorage").XMLHttpRequestUpload = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XMLHttpRequestUpload = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$2").XMLHttpRequestUpload = function($0, $1) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)));
};
$dynamic("addEventListener$3").XMLHttpRequestUpload = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("removeEventListener$3").XMLHttpRequestUpload = function($0, $1, $2) {
  return this.removeEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for dom_XMLSerializer **************
$dynamic("get$dartObjectLocalStorage").XMLSerializer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XMLSerializer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XPathEvaluator **************
$dynamic("get$dartObjectLocalStorage").XPathEvaluator = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathEvaluator = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XPathException **************
$dynamic("get$name").XPathException = function() { return this.name; };
$dynamic("set$name").XPathException = function(value) { return this.name = value; };
$dynamic("get$dartObjectLocalStorage").XPathException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").XPathException = function() {
  return this.toString();
};
// ********** Code for dom_XPathExpression **************
$dynamic("get$dartObjectLocalStorage").XPathExpression = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathExpression = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XPathNSResolver **************
$dynamic("get$dartObjectLocalStorage").XPathNSResolver = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathNSResolver = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XPathResult **************
$dynamic("get$dartObjectLocalStorage").XPathResult = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathResult = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XSLTProcessor **************
$dynamic("get$dartObjectLocalStorage").XSLTProcessor = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XSLTProcessor = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom__Collections **************
function dom__Collections() {}
// ********** Code for _VariableSizeListIterator_T **************
$inherits(_VariableSizeListIterator_T, dom__VariableSizeListIterator);
function _VariableSizeListIterator_T() {}
// ********** Code for dom__FixedSizeListIterator **************
$inherits(dom__FixedSizeListIterator, _VariableSizeListIterator_T);
function dom__FixedSizeListIterator() {}
dom__FixedSizeListIterator.prototype.hasNext$0 = dom__FixedSizeListIterator.prototype.hasNext;
// ********** Code for dom__VariableSizeListIterator **************
function dom__VariableSizeListIterator() {}
dom__VariableSizeListIterator.prototype.hasNext$0 = dom__VariableSizeListIterator.prototype.hasNext;
dom__VariableSizeListIterator.prototype.next$0 = dom__VariableSizeListIterator.prototype.next;
// ********** Code for dom__Lists **************
function dom__Lists() {}
// ********** Code for top level **************
function get$window() {
  return window;
}
function get$document() {
  return window.document;
}
//  ********** Library htmlimpl **************
// ********** Code for DOMWrapperBase **************
function DOMWrapperBase() {}
DOMWrapperBase._wrap$ctor = function(_ptr) {
  this._ptr = _ptr;
  // Initializers done
  this._ptr.set$dartObjectLocalStorage(this);
}
DOMWrapperBase._wrap$ctor.prototype = DOMWrapperBase.prototype;
DOMWrapperBase.prototype.get$_ptr = function() { return this._ptr; };
// ********** Code for EventTargetWrappingImplementation **************
$inherits(EventTargetWrappingImplementation, DOMWrapperBase);
function EventTargetWrappingImplementation() {}
EventTargetWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
EventTargetWrappingImplementation._wrap$ctor.prototype = EventTargetWrappingImplementation.prototype;
// ********** Code for NodeWrappingImplementation **************
$inherits(NodeWrappingImplementation, EventTargetWrappingImplementation);
function NodeWrappingImplementation() {}
NodeWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
NodeWrappingImplementation._wrap$ctor.prototype = NodeWrappingImplementation.prototype;
NodeWrappingImplementation.prototype.get$nodes = function() {
  if (this._nodes == null) {
    this._nodes = new _ChildrenNodeList._wrap$ctor(this._ptr);
  }
  return this._nodes;
}
NodeWrappingImplementation.prototype.get$document = function() {
  return LevelDom.wrapDocument(this._ptr.get$ownerDocument());
}
NodeWrappingImplementation.prototype.get$parent = function() {
  return LevelDom.wrapNode(this._ptr.get$parentNode());
}
NodeWrappingImplementation.prototype.set$text = function(value) {
  this._ptr.set$textContent(value);
}
NodeWrappingImplementation.prototype.remove = function() {
  if (this._ptr.get$parentNode() != null) {
    this._ptr.get$parentNode().removeChild$1(this._ptr);
  }
  return this;
}
NodeWrappingImplementation.prototype.remove$0 = NodeWrappingImplementation.prototype.remove;
// ********** Code for ElementWrappingImplementation **************
$inherits(ElementWrappingImplementation, NodeWrappingImplementation);
function ElementWrappingImplementation() {}
ElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
ElementWrappingImplementation._wrap$ctor.prototype = ElementWrappingImplementation.prototype;
ElementWrappingImplementation.ElementWrappingImplementation$tag$factory = function(tag) {
  return LevelDom.wrapElement(get$document().createElement(tag));
}
ElementWrappingImplementation.prototype.get$attributes = function() {
  if (this._elementAttributeMap == null) {
    this._elementAttributeMap = new ElementAttributeMap._wrap$ctor(this._ptr);
  }
  return this._elementAttributeMap;
}
ElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
ElementWrappingImplementation.prototype.get$tagName = function() {
  return this._ptr.get$tagName();
}
ElementWrappingImplementation.prototype.blur = function() {
  this._ptr.blur$0();
}
ElementWrappingImplementation.prototype.get$blur = function() {
  return this.blur.bind(this);
}
ElementWrappingImplementation.prototype.focus = function() {
  this._ptr.focus$0();
}
ElementWrappingImplementation.prototype.get$focus = function() {
  return this.focus.bind(this);
}
ElementWrappingImplementation.prototype.query = function(selectors) {
  return LevelDom.wrapElement(this._ptr.querySelector$1(selectors));
}
ElementWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new ElementEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
ElementWrappingImplementation.prototype.blur$0 = ElementWrappingImplementation.prototype.blur;
ElementWrappingImplementation.prototype.focus$0 = ElementWrappingImplementation.prototype.focus;
// ********** Code for AnchorElementWrappingImplementation **************
$inherits(AnchorElementWrappingImplementation, ElementWrappingImplementation);
function AnchorElementWrappingImplementation() {}
AnchorElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
AnchorElementWrappingImplementation._wrap$ctor.prototype = AnchorElementWrappingImplementation.prototype;
AnchorElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
NodeWrappingImplementation.prototype.set$text = function(value) {
  this._ptr.set$textContent(value);
}
AnchorElementWrappingImplementation.prototype.toString = function() {
  return this._ptr.toString$0();
}
AnchorElementWrappingImplementation.prototype.toString$0 = AnchorElementWrappingImplementation.prototype.toString;
// ********** Code for AreaElementWrappingImplementation **************
$inherits(AreaElementWrappingImplementation, ElementWrappingImplementation);
function AreaElementWrappingImplementation() {}
AreaElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
AreaElementWrappingImplementation._wrap$ctor.prototype = AreaElementWrappingImplementation.prototype;
// ********** Code for MediaElementWrappingImplementation **************
$inherits(MediaElementWrappingImplementation, ElementWrappingImplementation);
function MediaElementWrappingImplementation() {}
MediaElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MediaElementWrappingImplementation._wrap$ctor.prototype = MediaElementWrappingImplementation.prototype;
// ********** Code for AudioElementWrappingImplementation **************
$inherits(AudioElementWrappingImplementation, MediaElementWrappingImplementation);
function AudioElementWrappingImplementation() {}
AudioElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  MediaElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
AudioElementWrappingImplementation._wrap$ctor.prototype = AudioElementWrappingImplementation.prototype;
// ********** Code for EventWrappingImplementation **************
$inherits(EventWrappingImplementation, DOMWrapperBase);
function EventWrappingImplementation() {}
EventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
EventWrappingImplementation._wrap$ctor.prototype = EventWrappingImplementation.prototype;
EventWrappingImplementation.prototype.set$cancelBubble = function(value) {
  this._ptr.set$cancelBubble(value);
}
EventWrappingImplementation.prototype.get$cancelable = function() {
  return this._ptr.get$cancelable();
}
// ********** Code for AudioProcessingEventWrappingImplementation **************
$inherits(AudioProcessingEventWrappingImplementation, EventWrappingImplementation);
function AudioProcessingEventWrappingImplementation() {}
AudioProcessingEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
AudioProcessingEventWrappingImplementation._wrap$ctor.prototype = AudioProcessingEventWrappingImplementation.prototype;
// ********** Code for BRElementWrappingImplementation **************
$inherits(BRElementWrappingImplementation, ElementWrappingImplementation);
function BRElementWrappingImplementation() {}
BRElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
BRElementWrappingImplementation._wrap$ctor.prototype = BRElementWrappingImplementation.prototype;
// ********** Code for BaseElementWrappingImplementation **************
$inherits(BaseElementWrappingImplementation, ElementWrappingImplementation);
function BaseElementWrappingImplementation() {}
BaseElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
BaseElementWrappingImplementation._wrap$ctor.prototype = BaseElementWrappingImplementation.prototype;
// ********** Code for ButtonElementWrappingImplementation **************
$inherits(ButtonElementWrappingImplementation, ElementWrappingImplementation);
function ButtonElementWrappingImplementation() {}
ButtonElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ButtonElementWrappingImplementation._wrap$ctor.prototype = ButtonElementWrappingImplementation.prototype;
ButtonElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
ButtonElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
ButtonElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
ButtonElementWrappingImplementation.prototype.click = function() {
  this._ptr.click$0();
  return;
}
ButtonElementWrappingImplementation.prototype.get$click = function() {
  return this.click.bind(this);
}
ButtonElementWrappingImplementation.prototype.click$0 = ButtonElementWrappingImplementation.prototype.click;
// ********** Code for CharacterDataWrappingImplementation **************
$inherits(CharacterDataWrappingImplementation, NodeWrappingImplementation);
function CharacterDataWrappingImplementation() {}
CharacterDataWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
CharacterDataWrappingImplementation._wrap$ctor.prototype = CharacterDataWrappingImplementation.prototype;
CharacterDataWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
// ********** Code for TextWrappingImplementation **************
$inherits(TextWrappingImplementation, CharacterDataWrappingImplementation);
function TextWrappingImplementation() {}
TextWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  CharacterDataWrappingImplementation._wrap$ctor.call(this, ptr);
}
TextWrappingImplementation._wrap$ctor.prototype = TextWrappingImplementation.prototype;
// ********** Code for CDATASectionWrappingImplementation **************
$inherits(CDATASectionWrappingImplementation, TextWrappingImplementation);
function CDATASectionWrappingImplementation() {}
CDATASectionWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  TextWrappingImplementation._wrap$ctor.call(this, ptr);
}
CDATASectionWrappingImplementation._wrap$ctor.prototype = CDATASectionWrappingImplementation.prototype;
// ********** Code for CanvasElementWrappingImplementation **************
$inherits(CanvasElementWrappingImplementation, ElementWrappingImplementation);
function CanvasElementWrappingImplementation() {}
CanvasElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
CanvasElementWrappingImplementation._wrap$ctor.prototype = CanvasElementWrappingImplementation.prototype;
CanvasElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
CanvasElementWrappingImplementation.prototype.set$height = function(value) {
  this._ptr.set$height(value);
}
CanvasElementWrappingImplementation.prototype.set$width = function(value) {
  this._ptr.set$width(value);
}
// ********** Code for CommentWrappingImplementation **************
$inherits(CommentWrappingImplementation, CharacterDataWrappingImplementation);
function CommentWrappingImplementation() {}
CommentWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  CharacterDataWrappingImplementation._wrap$ctor.call(this, ptr);
}
CommentWrappingImplementation._wrap$ctor.prototype = CommentWrappingImplementation.prototype;
// ********** Code for DListElementWrappingImplementation **************
$inherits(DListElementWrappingImplementation, ElementWrappingImplementation);
function DListElementWrappingImplementation() {}
DListElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
DListElementWrappingImplementation._wrap$ctor.prototype = DListElementWrappingImplementation.prototype;
// ********** Code for DataListElementWrappingImplementation **************
$inherits(DataListElementWrappingImplementation, ElementWrappingImplementation);
function DataListElementWrappingImplementation() {}
DataListElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
DataListElementWrappingImplementation._wrap$ctor.prototype = DataListElementWrappingImplementation.prototype;
// ********** Code for DetailsElementWrappingImplementation **************
$inherits(DetailsElementWrappingImplementation, ElementWrappingImplementation);
function DetailsElementWrappingImplementation() {}
DetailsElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
DetailsElementWrappingImplementation._wrap$ctor.prototype = DetailsElementWrappingImplementation.prototype;
// ********** Code for DivElementWrappingImplementation **************
$inherits(DivElementWrappingImplementation, ElementWrappingImplementation);
function DivElementWrappingImplementation() {}
DivElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
DivElementWrappingImplementation._wrap$ctor.prototype = DivElementWrappingImplementation.prototype;
// ********** Code for EmbedElementWrappingImplementation **************
$inherits(EmbedElementWrappingImplementation, ElementWrappingImplementation);
function EmbedElementWrappingImplementation() {}
EmbedElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
EmbedElementWrappingImplementation._wrap$ctor.prototype = EmbedElementWrappingImplementation.prototype;
EmbedElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
EmbedElementWrappingImplementation.prototype.set$height = function(value) {
  this._ptr.set$height(value);
}
EmbedElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
EmbedElementWrappingImplementation.prototype.set$width = function(value) {
  this._ptr.set$width(value);
}
// ********** Code for EntityReferenceWrappingImplementation **************
$inherits(EntityReferenceWrappingImplementation, NodeWrappingImplementation);
function EntityReferenceWrappingImplementation() {}
EntityReferenceWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
EntityReferenceWrappingImplementation._wrap$ctor.prototype = EntityReferenceWrappingImplementation.prototype;
// ********** Code for EntityWrappingImplementation **************
$inherits(EntityWrappingImplementation, NodeWrappingImplementation);
function EntityWrappingImplementation() {}
EntityWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
EntityWrappingImplementation._wrap$ctor.prototype = EntityWrappingImplementation.prototype;
// ********** Code for FieldSetElementWrappingImplementation **************
$inherits(FieldSetElementWrappingImplementation, ElementWrappingImplementation);
function FieldSetElementWrappingImplementation() {}
FieldSetElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
FieldSetElementWrappingImplementation._wrap$ctor.prototype = FieldSetElementWrappingImplementation.prototype;
// ********** Code for FontElementWrappingImplementation **************
$inherits(FontElementWrappingImplementation, ElementWrappingImplementation);
function FontElementWrappingImplementation() {}
FontElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
FontElementWrappingImplementation._wrap$ctor.prototype = FontElementWrappingImplementation.prototype;
FontElementWrappingImplementation.prototype.get$color = function() {
  return this._ptr.get$color();
}
// ********** Code for FormElementWrappingImplementation **************
$inherits(FormElementWrappingImplementation, ElementWrappingImplementation);
function FormElementWrappingImplementation() {}
FormElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
FormElementWrappingImplementation._wrap$ctor.prototype = FormElementWrappingImplementation.prototype;
FormElementWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
FormElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
// ********** Code for HRElementWrappingImplementation **************
$inherits(HRElementWrappingImplementation, ElementWrappingImplementation);
function HRElementWrappingImplementation() {}
HRElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
HRElementWrappingImplementation._wrap$ctor.prototype = HRElementWrappingImplementation.prototype;
HRElementWrappingImplementation.prototype.set$width = function(value) {
  this._ptr.set$width(value);
}
// ********** Code for HeadElementWrappingImplementation **************
$inherits(HeadElementWrappingImplementation, ElementWrappingImplementation);
function HeadElementWrappingImplementation() {}
HeadElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
HeadElementWrappingImplementation._wrap$ctor.prototype = HeadElementWrappingImplementation.prototype;
// ********** Code for HeadingElementWrappingImplementation **************
$inherits(HeadingElementWrappingImplementation, ElementWrappingImplementation);
function HeadingElementWrappingImplementation() {}
HeadingElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
HeadingElementWrappingImplementation._wrap$ctor.prototype = HeadingElementWrappingImplementation.prototype;
// ********** Code for IDBVersionChangeEventWrappingImplementation **************
$inherits(IDBVersionChangeEventWrappingImplementation, EventWrappingImplementation);
function IDBVersionChangeEventWrappingImplementation() {}
IDBVersionChangeEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
IDBVersionChangeEventWrappingImplementation._wrap$ctor.prototype = IDBVersionChangeEventWrappingImplementation.prototype;
// ********** Code for IFrameElementWrappingImplementation **************
$inherits(IFrameElementWrappingImplementation, ElementWrappingImplementation);
function IFrameElementWrappingImplementation() {}
IFrameElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
IFrameElementWrappingImplementation._wrap$ctor.prototype = IFrameElementWrappingImplementation.prototype;
IFrameElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
IFrameElementWrappingImplementation.prototype.set$height = function(value) {
  this._ptr.set$height(value);
}
IFrameElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
IFrameElementWrappingImplementation.prototype.set$width = function(value) {
  this._ptr.set$width(value);
}
// ********** Code for ImageElementWrappingImplementation **************
$inherits(ImageElementWrappingImplementation, ElementWrappingImplementation);
function ImageElementWrappingImplementation() {}
ImageElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ImageElementWrappingImplementation._wrap$ctor.prototype = ImageElementWrappingImplementation.prototype;
ImageElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
ImageElementWrappingImplementation.prototype.set$height = function(value) {
  this._ptr.set$height(value);
}
ImageElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
ImageElementWrappingImplementation.prototype.set$width = function(value) {
  this._ptr.set$width(value);
}
// ********** Code for InputElementWrappingImplementation **************
$inherits(InputElementWrappingImplementation, ElementWrappingImplementation);
function InputElementWrappingImplementation() {}
InputElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
InputElementWrappingImplementation._wrap$ctor.prototype = InputElementWrappingImplementation.prototype;
InputElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
InputElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
InputElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
InputElementWrappingImplementation.prototype.click = function() {
  this._ptr.click$0();
  return;
}
InputElementWrappingImplementation.prototype.get$click = function() {
  return this.click.bind(this);
}
InputElementWrappingImplementation.prototype.click$0 = InputElementWrappingImplementation.prototype.click;
// ********** Code for KeygenElementWrappingImplementation **************
$inherits(KeygenElementWrappingImplementation, ElementWrappingImplementation);
function KeygenElementWrappingImplementation() {}
KeygenElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
KeygenElementWrappingImplementation._wrap$ctor.prototype = KeygenElementWrappingImplementation.prototype;
KeygenElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
// ********** Code for LIElementWrappingImplementation **************
$inherits(LIElementWrappingImplementation, ElementWrappingImplementation);
function LIElementWrappingImplementation() {}
LIElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
LIElementWrappingImplementation._wrap$ctor.prototype = LIElementWrappingImplementation.prototype;
LIElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
LIElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for LabelElementWrappingImplementation **************
$inherits(LabelElementWrappingImplementation, ElementWrappingImplementation);
function LabelElementWrappingImplementation() {}
LabelElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
LabelElementWrappingImplementation._wrap$ctor.prototype = LabelElementWrappingImplementation.prototype;
// ********** Code for LegendElementWrappingImplementation **************
$inherits(LegendElementWrappingImplementation, ElementWrappingImplementation);
function LegendElementWrappingImplementation() {}
LegendElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
LegendElementWrappingImplementation._wrap$ctor.prototype = LegendElementWrappingImplementation.prototype;
// ********** Code for LinkElementWrappingImplementation **************
$inherits(LinkElementWrappingImplementation, ElementWrappingImplementation);
function LinkElementWrappingImplementation() {}
LinkElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
LinkElementWrappingImplementation._wrap$ctor.prototype = LinkElementWrappingImplementation.prototype;
// ********** Code for MapElementWrappingImplementation **************
$inherits(MapElementWrappingImplementation, ElementWrappingImplementation);
function MapElementWrappingImplementation() {}
MapElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MapElementWrappingImplementation._wrap$ctor.prototype = MapElementWrappingImplementation.prototype;
MapElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
// ********** Code for MarqueeElementWrappingImplementation **************
$inherits(MarqueeElementWrappingImplementation, ElementWrappingImplementation);
function MarqueeElementWrappingImplementation() {}
MarqueeElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MarqueeElementWrappingImplementation._wrap$ctor.prototype = MarqueeElementWrappingImplementation.prototype;
MarqueeElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
MarqueeElementWrappingImplementation.prototype.set$height = function(value) {
  this._ptr.set$height(value);
}
MarqueeElementWrappingImplementation.prototype.set$width = function(value) {
  this._ptr.set$width(value);
}
MarqueeElementWrappingImplementation.prototype.start = function() {
  this._ptr.start$0();
  return;
}
MarqueeElementWrappingImplementation.prototype.get$start = function() {
  return this.start.bind(this);
}
MarqueeElementWrappingImplementation.prototype.start$0 = MarqueeElementWrappingImplementation.prototype.start;
// ********** Code for MenuElementWrappingImplementation **************
$inherits(MenuElementWrappingImplementation, ElementWrappingImplementation);
function MenuElementWrappingImplementation() {}
MenuElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MenuElementWrappingImplementation._wrap$ctor.prototype = MenuElementWrappingImplementation.prototype;
// ********** Code for MetaElementWrappingImplementation **************
$inherits(MetaElementWrappingImplementation, ElementWrappingImplementation);
function MetaElementWrappingImplementation() {}
MetaElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MetaElementWrappingImplementation._wrap$ctor.prototype = MetaElementWrappingImplementation.prototype;
MetaElementWrappingImplementation.prototype.get$content = function() {
  return this._ptr.get$content();
}
MetaElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
// ********** Code for MeterElementWrappingImplementation **************
$inherits(MeterElementWrappingImplementation, ElementWrappingImplementation);
function MeterElementWrappingImplementation() {}
MeterElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MeterElementWrappingImplementation._wrap$ctor.prototype = MeterElementWrappingImplementation.prototype;
MeterElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
MeterElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for ModElementWrappingImplementation **************
$inherits(ModElementWrappingImplementation, ElementWrappingImplementation);
function ModElementWrappingImplementation() {}
ModElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ModElementWrappingImplementation._wrap$ctor.prototype = ModElementWrappingImplementation.prototype;
// ********** Code for NotationWrappingImplementation **************
$inherits(NotationWrappingImplementation, NodeWrappingImplementation);
function NotationWrappingImplementation() {}
NotationWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
NotationWrappingImplementation._wrap$ctor.prototype = NotationWrappingImplementation.prototype;
// ********** Code for OListElementWrappingImplementation **************
$inherits(OListElementWrappingImplementation, ElementWrappingImplementation);
function OListElementWrappingImplementation() {}
OListElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
OListElementWrappingImplementation._wrap$ctor.prototype = OListElementWrappingImplementation.prototype;
OListElementWrappingImplementation.prototype.get$start = function() {
  return this._ptr.get$start();
}
OListElementWrappingImplementation.prototype.start$0 = function() {
  return this.get$start()();
};
// ********** Code for OfflineAudioCompletionEventWrappingImplementation **************
$inherits(OfflineAudioCompletionEventWrappingImplementation, EventWrappingImplementation);
function OfflineAudioCompletionEventWrappingImplementation() {}
OfflineAudioCompletionEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
OfflineAudioCompletionEventWrappingImplementation._wrap$ctor.prototype = OfflineAudioCompletionEventWrappingImplementation.prototype;
// ********** Code for OptGroupElementWrappingImplementation **************
$inherits(OptGroupElementWrappingImplementation, ElementWrappingImplementation);
function OptGroupElementWrappingImplementation() {}
OptGroupElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
OptGroupElementWrappingImplementation._wrap$ctor.prototype = OptGroupElementWrappingImplementation.prototype;
// ********** Code for OptionElementWrappingImplementation **************
$inherits(OptionElementWrappingImplementation, ElementWrappingImplementation);
function OptionElementWrappingImplementation() {}
OptionElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
OptionElementWrappingImplementation._wrap$ctor.prototype = OptionElementWrappingImplementation.prototype;
OptionElementWrappingImplementation.prototype.set$text = function(value) {
  this._ptr.set$text(value);
}
OptionElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
OptionElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for OutputElementWrappingImplementation **************
$inherits(OutputElementWrappingImplementation, ElementWrappingImplementation);
function OutputElementWrappingImplementation() {}
OutputElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
OutputElementWrappingImplementation._wrap$ctor.prototype = OutputElementWrappingImplementation.prototype;
OutputElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
OutputElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
OutputElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for ParagraphElementWrappingImplementation **************
$inherits(ParagraphElementWrappingImplementation, ElementWrappingImplementation);
function ParagraphElementWrappingImplementation() {}
ParagraphElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ParagraphElementWrappingImplementation._wrap$ctor.prototype = ParagraphElementWrappingImplementation.prototype;
// ********** Code for ParamElementWrappingImplementation **************
$inherits(ParamElementWrappingImplementation, ElementWrappingImplementation);
function ParamElementWrappingImplementation() {}
ParamElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ParamElementWrappingImplementation._wrap$ctor.prototype = ParamElementWrappingImplementation.prototype;
ParamElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
ParamElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
ParamElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for PreElementWrappingImplementation **************
$inherits(PreElementWrappingImplementation, ElementWrappingImplementation);
function PreElementWrappingImplementation() {}
PreElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
PreElementWrappingImplementation._wrap$ctor.prototype = PreElementWrappingImplementation.prototype;
PreElementWrappingImplementation.prototype.set$width = function(value) {
  this._ptr.set$width(value);
}
// ********** Code for ProcessingInstructionWrappingImplementation **************
$inherits(ProcessingInstructionWrappingImplementation, NodeWrappingImplementation);
function ProcessingInstructionWrappingImplementation() {}
ProcessingInstructionWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
ProcessingInstructionWrappingImplementation._wrap$ctor.prototype = ProcessingInstructionWrappingImplementation.prototype;
// ********** Code for ProgressElementWrappingImplementation **************
$inherits(ProgressElementWrappingImplementation, ElementWrappingImplementation);
function ProgressElementWrappingImplementation() {}
ProgressElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ProgressElementWrappingImplementation._wrap$ctor.prototype = ProgressElementWrappingImplementation.prototype;
ProgressElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
ProgressElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for QuoteElementWrappingImplementation **************
$inherits(QuoteElementWrappingImplementation, ElementWrappingImplementation);
function QuoteElementWrappingImplementation() {}
QuoteElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
QuoteElementWrappingImplementation._wrap$ctor.prototype = QuoteElementWrappingImplementation.prototype;
// ********** Code for SVGElementWrappingImplementation **************
$inherits(SVGElementWrappingImplementation, ElementWrappingImplementation);
function SVGElementWrappingImplementation() {}
SVGElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGElementWrappingImplementation._wrap$ctor.prototype = SVGElementWrappingImplementation.prototype;
// ********** Code for SVGAElementWrappingImplementation **************
$inherits(SVGAElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGAElementWrappingImplementation() {}
SVGAElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAElementWrappingImplementation._wrap$ctor.prototype = SVGAElementWrappingImplementation.prototype;
SVGAElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGAltGlyphDefElementWrappingImplementation **************
$inherits(SVGAltGlyphDefElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGAltGlyphDefElementWrappingImplementation() {}
SVGAltGlyphDefElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAltGlyphDefElementWrappingImplementation._wrap$ctor.prototype = SVGAltGlyphDefElementWrappingImplementation.prototype;
// ********** Code for SVGTextContentElementWrappingImplementation **************
$inherits(SVGTextContentElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGTextContentElementWrappingImplementation() {}
SVGTextContentElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTextContentElementWrappingImplementation._wrap$ctor.prototype = SVGTextContentElementWrappingImplementation.prototype;
SVGTextContentElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGTextPositioningElementWrappingImplementation **************
$inherits(SVGTextPositioningElementWrappingImplementation, SVGTextContentElementWrappingImplementation);
function SVGTextPositioningElementWrappingImplementation() {}
SVGTextPositioningElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGTextContentElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTextPositioningElementWrappingImplementation._wrap$ctor.prototype = SVGTextPositioningElementWrappingImplementation.prototype;
// ********** Code for SVGAltGlyphElementWrappingImplementation **************
$inherits(SVGAltGlyphElementWrappingImplementation, SVGTextPositioningElementWrappingImplementation);
function SVGAltGlyphElementWrappingImplementation() {}
SVGAltGlyphElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGTextPositioningElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAltGlyphElementWrappingImplementation._wrap$ctor.prototype = SVGAltGlyphElementWrappingImplementation.prototype;
// ********** Code for SVGAltGlyphItemElementWrappingImplementation **************
$inherits(SVGAltGlyphItemElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGAltGlyphItemElementWrappingImplementation() {}
SVGAltGlyphItemElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAltGlyphItemElementWrappingImplementation._wrap$ctor.prototype = SVGAltGlyphItemElementWrappingImplementation.prototype;
// ********** Code for SVGAnimationElementWrappingImplementation **************
$inherits(SVGAnimationElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGAnimationElementWrappingImplementation() {}
SVGAnimationElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimationElementWrappingImplementation._wrap$ctor.prototype = SVGAnimationElementWrappingImplementation.prototype;
// ********** Code for SVGAnimateColorElementWrappingImplementation **************
$inherits(SVGAnimateColorElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGAnimateColorElementWrappingImplementation() {}
SVGAnimateColorElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimateColorElementWrappingImplementation._wrap$ctor.prototype = SVGAnimateColorElementWrappingImplementation.prototype;
// ********** Code for SVGAnimateElementWrappingImplementation **************
$inherits(SVGAnimateElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGAnimateElementWrappingImplementation() {}
SVGAnimateElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimateElementWrappingImplementation._wrap$ctor.prototype = SVGAnimateElementWrappingImplementation.prototype;
// ********** Code for SVGAnimateMotionElementWrappingImplementation **************
$inherits(SVGAnimateMotionElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGAnimateMotionElementWrappingImplementation() {}
SVGAnimateMotionElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimateMotionElementWrappingImplementation._wrap$ctor.prototype = SVGAnimateMotionElementWrappingImplementation.prototype;
// ********** Code for SVGAnimateTransformElementWrappingImplementation **************
$inherits(SVGAnimateTransformElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGAnimateTransformElementWrappingImplementation() {}
SVGAnimateTransformElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimateTransformElementWrappingImplementation._wrap$ctor.prototype = SVGAnimateTransformElementWrappingImplementation.prototype;
// ********** Code for SVGAnimatedLengthWrappingImplementation **************
$inherits(SVGAnimatedLengthWrappingImplementation, DOMWrapperBase);
function SVGAnimatedLengthWrappingImplementation() {}
SVGAnimatedLengthWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
SVGAnimatedLengthWrappingImplementation._wrap$ctor.prototype = SVGAnimatedLengthWrappingImplementation.prototype;
// ********** Code for SVGCircleElementWrappingImplementation **************
$inherits(SVGCircleElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGCircleElementWrappingImplementation() {}
SVGCircleElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGCircleElementWrappingImplementation._wrap$ctor.prototype = SVGCircleElementWrappingImplementation.prototype;
SVGCircleElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGClipPathElementWrappingImplementation **************
$inherits(SVGClipPathElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGClipPathElementWrappingImplementation() {}
SVGClipPathElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGClipPathElementWrappingImplementation._wrap$ctor.prototype = SVGClipPathElementWrappingImplementation.prototype;
SVGClipPathElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGComponentTransferFunctionElementWrappingImplementation **************
$inherits(SVGComponentTransferFunctionElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGComponentTransferFunctionElementWrappingImplementation() {}
SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.prototype = SVGComponentTransferFunctionElementWrappingImplementation.prototype;
// ********** Code for SVGCursorElementWrappingImplementation **************
$inherits(SVGCursorElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGCursorElementWrappingImplementation() {}
SVGCursorElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGCursorElementWrappingImplementation._wrap$ctor.prototype = SVGCursorElementWrappingImplementation.prototype;
// ********** Code for SVGDefsElementWrappingImplementation **************
$inherits(SVGDefsElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGDefsElementWrappingImplementation() {}
SVGDefsElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGDefsElementWrappingImplementation._wrap$ctor.prototype = SVGDefsElementWrappingImplementation.prototype;
SVGDefsElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGDescElementWrappingImplementation **************
$inherits(SVGDescElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGDescElementWrappingImplementation() {}
SVGDescElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGDescElementWrappingImplementation._wrap$ctor.prototype = SVGDescElementWrappingImplementation.prototype;
SVGDescElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGEllipseElementWrappingImplementation **************
$inherits(SVGEllipseElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGEllipseElementWrappingImplementation() {}
SVGEllipseElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGEllipseElementWrappingImplementation._wrap$ctor.prototype = SVGEllipseElementWrappingImplementation.prototype;
SVGEllipseElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEBlendElementWrappingImplementation **************
$inherits(SVGFEBlendElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEBlendElementWrappingImplementation() {}
SVGFEBlendElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEBlendElementWrappingImplementation._wrap$ctor.prototype = SVGFEBlendElementWrappingImplementation.prototype;
SVGFEBlendElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEBlendElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEColorMatrixElementWrappingImplementation **************
$inherits(SVGFEColorMatrixElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEColorMatrixElementWrappingImplementation() {}
SVGFEColorMatrixElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEColorMatrixElementWrappingImplementation._wrap$ctor.prototype = SVGFEColorMatrixElementWrappingImplementation.prototype;
SVGFEColorMatrixElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEColorMatrixElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEComponentTransferElementWrappingImplementation **************
$inherits(SVGFEComponentTransferElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEComponentTransferElementWrappingImplementation() {}
SVGFEComponentTransferElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEComponentTransferElementWrappingImplementation._wrap$ctor.prototype = SVGFEComponentTransferElementWrappingImplementation.prototype;
SVGFEComponentTransferElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEComponentTransferElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEConvolveMatrixElementWrappingImplementation **************
$inherits(SVGFEConvolveMatrixElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEConvolveMatrixElementWrappingImplementation() {}
SVGFEConvolveMatrixElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEConvolveMatrixElementWrappingImplementation._wrap$ctor.prototype = SVGFEConvolveMatrixElementWrappingImplementation.prototype;
SVGFEConvolveMatrixElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEConvolveMatrixElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEDiffuseLightingElementWrappingImplementation **************
$inherits(SVGFEDiffuseLightingElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEDiffuseLightingElementWrappingImplementation() {}
SVGFEDiffuseLightingElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEDiffuseLightingElementWrappingImplementation._wrap$ctor.prototype = SVGFEDiffuseLightingElementWrappingImplementation.prototype;
SVGFEDiffuseLightingElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEDiffuseLightingElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEDisplacementMapElementWrappingImplementation **************
$inherits(SVGFEDisplacementMapElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEDisplacementMapElementWrappingImplementation() {}
SVGFEDisplacementMapElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEDisplacementMapElementWrappingImplementation._wrap$ctor.prototype = SVGFEDisplacementMapElementWrappingImplementation.prototype;
SVGFEDisplacementMapElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEDisplacementMapElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEDistantLightElementWrappingImplementation **************
$inherits(SVGFEDistantLightElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEDistantLightElementWrappingImplementation() {}
SVGFEDistantLightElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEDistantLightElementWrappingImplementation._wrap$ctor.prototype = SVGFEDistantLightElementWrappingImplementation.prototype;
// ********** Code for SVGFEDropShadowElementWrappingImplementation **************
$inherits(SVGFEDropShadowElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEDropShadowElementWrappingImplementation() {}
SVGFEDropShadowElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEDropShadowElementWrappingImplementation._wrap$ctor.prototype = SVGFEDropShadowElementWrappingImplementation.prototype;
SVGFEDropShadowElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEDropShadowElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEFloodElementWrappingImplementation **************
$inherits(SVGFEFloodElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEFloodElementWrappingImplementation() {}
SVGFEFloodElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFloodElementWrappingImplementation._wrap$ctor.prototype = SVGFEFloodElementWrappingImplementation.prototype;
SVGFEFloodElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEFloodElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEFuncAElementWrappingImplementation **************
$inherits(SVGFEFuncAElementWrappingImplementation, SVGComponentTransferFunctionElementWrappingImplementation);
function SVGFEFuncAElementWrappingImplementation() {}
SVGFEFuncAElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFuncAElementWrappingImplementation._wrap$ctor.prototype = SVGFEFuncAElementWrappingImplementation.prototype;
// ********** Code for SVGFEFuncBElementWrappingImplementation **************
$inherits(SVGFEFuncBElementWrappingImplementation, SVGComponentTransferFunctionElementWrappingImplementation);
function SVGFEFuncBElementWrappingImplementation() {}
SVGFEFuncBElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFuncBElementWrappingImplementation._wrap$ctor.prototype = SVGFEFuncBElementWrappingImplementation.prototype;
// ********** Code for SVGFEFuncGElementWrappingImplementation **************
$inherits(SVGFEFuncGElementWrappingImplementation, SVGComponentTransferFunctionElementWrappingImplementation);
function SVGFEFuncGElementWrappingImplementation() {}
SVGFEFuncGElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFuncGElementWrappingImplementation._wrap$ctor.prototype = SVGFEFuncGElementWrappingImplementation.prototype;
// ********** Code for SVGFEFuncRElementWrappingImplementation **************
$inherits(SVGFEFuncRElementWrappingImplementation, SVGComponentTransferFunctionElementWrappingImplementation);
function SVGFEFuncRElementWrappingImplementation() {}
SVGFEFuncRElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFuncRElementWrappingImplementation._wrap$ctor.prototype = SVGFEFuncRElementWrappingImplementation.prototype;
// ********** Code for SVGFEGaussianBlurElementWrappingImplementation **************
$inherits(SVGFEGaussianBlurElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEGaussianBlurElementWrappingImplementation() {}
SVGFEGaussianBlurElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEGaussianBlurElementWrappingImplementation._wrap$ctor.prototype = SVGFEGaussianBlurElementWrappingImplementation.prototype;
SVGFEGaussianBlurElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEGaussianBlurElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEImageElementWrappingImplementation **************
$inherits(SVGFEImageElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEImageElementWrappingImplementation() {}
SVGFEImageElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEImageElementWrappingImplementation._wrap$ctor.prototype = SVGFEImageElementWrappingImplementation.prototype;
SVGFEImageElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEImageElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEMergeElementWrappingImplementation **************
$inherits(SVGFEMergeElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEMergeElementWrappingImplementation() {}
SVGFEMergeElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEMergeElementWrappingImplementation._wrap$ctor.prototype = SVGFEMergeElementWrappingImplementation.prototype;
SVGFEMergeElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEMergeElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEMergeNodeElementWrappingImplementation **************
$inherits(SVGFEMergeNodeElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEMergeNodeElementWrappingImplementation() {}
SVGFEMergeNodeElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEMergeNodeElementWrappingImplementation._wrap$ctor.prototype = SVGFEMergeNodeElementWrappingImplementation.prototype;
// ********** Code for SVGFEOffsetElementWrappingImplementation **************
$inherits(SVGFEOffsetElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEOffsetElementWrappingImplementation() {}
SVGFEOffsetElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEOffsetElementWrappingImplementation._wrap$ctor.prototype = SVGFEOffsetElementWrappingImplementation.prototype;
SVGFEOffsetElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFEOffsetElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFEPointLightElementWrappingImplementation **************
$inherits(SVGFEPointLightElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEPointLightElementWrappingImplementation() {}
SVGFEPointLightElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEPointLightElementWrappingImplementation._wrap$ctor.prototype = SVGFEPointLightElementWrappingImplementation.prototype;
// ********** Code for SVGFESpecularLightingElementWrappingImplementation **************
$inherits(SVGFESpecularLightingElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFESpecularLightingElementWrappingImplementation() {}
SVGFESpecularLightingElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFESpecularLightingElementWrappingImplementation._wrap$ctor.prototype = SVGFESpecularLightingElementWrappingImplementation.prototype;
SVGFESpecularLightingElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFESpecularLightingElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFESpotLightElementWrappingImplementation **************
$inherits(SVGFESpotLightElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFESpotLightElementWrappingImplementation() {}
SVGFESpotLightElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFESpotLightElementWrappingImplementation._wrap$ctor.prototype = SVGFESpotLightElementWrappingImplementation.prototype;
// ********** Code for SVGFETileElementWrappingImplementation **************
$inherits(SVGFETileElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFETileElementWrappingImplementation() {}
SVGFETileElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFETileElementWrappingImplementation._wrap$ctor.prototype = SVGFETileElementWrappingImplementation.prototype;
SVGFETileElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFETileElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFETurbulenceElementWrappingImplementation **************
$inherits(SVGFETurbulenceElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFETurbulenceElementWrappingImplementation() {}
SVGFETurbulenceElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFETurbulenceElementWrappingImplementation._wrap$ctor.prototype = SVGFETurbulenceElementWrappingImplementation.prototype;
SVGFETurbulenceElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFETurbulenceElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFilterElementWrappingImplementation **************
$inherits(SVGFilterElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFilterElementWrappingImplementation() {}
SVGFilterElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFilterElementWrappingImplementation._wrap$ctor.prototype = SVGFilterElementWrappingImplementation.prototype;
SVGFilterElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGFilterElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGFontElementWrappingImplementation **************
$inherits(SVGFontElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontElementWrappingImplementation() {}
SVGFontElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontElementWrappingImplementation._wrap$ctor.prototype = SVGFontElementWrappingImplementation.prototype;
// ********** Code for SVGFontFaceElementWrappingImplementation **************
$inherits(SVGFontFaceElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceElementWrappingImplementation() {}
SVGFontFaceElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceElementWrappingImplementation.prototype;
// ********** Code for SVGFontFaceFormatElementWrappingImplementation **************
$inherits(SVGFontFaceFormatElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceFormatElementWrappingImplementation() {}
SVGFontFaceFormatElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceFormatElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceFormatElementWrappingImplementation.prototype;
// ********** Code for SVGFontFaceNameElementWrappingImplementation **************
$inherits(SVGFontFaceNameElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceNameElementWrappingImplementation() {}
SVGFontFaceNameElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceNameElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceNameElementWrappingImplementation.prototype;
// ********** Code for SVGFontFaceSrcElementWrappingImplementation **************
$inherits(SVGFontFaceSrcElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceSrcElementWrappingImplementation() {}
SVGFontFaceSrcElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceSrcElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceSrcElementWrappingImplementation.prototype;
// ********** Code for SVGFontFaceUriElementWrappingImplementation **************
$inherits(SVGFontFaceUriElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceUriElementWrappingImplementation() {}
SVGFontFaceUriElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceUriElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceUriElementWrappingImplementation.prototype;
// ********** Code for SVGForeignObjectElementWrappingImplementation **************
$inherits(SVGForeignObjectElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGForeignObjectElementWrappingImplementation() {}
SVGForeignObjectElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGForeignObjectElementWrappingImplementation._wrap$ctor.prototype = SVGForeignObjectElementWrappingImplementation.prototype;
SVGForeignObjectElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGForeignObjectElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGGElementWrappingImplementation **************
$inherits(SVGGElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGGElementWrappingImplementation() {}
SVGGElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGGElementWrappingImplementation._wrap$ctor.prototype = SVGGElementWrappingImplementation.prototype;
SVGGElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGGlyphElementWrappingImplementation **************
$inherits(SVGGlyphElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGGlyphElementWrappingImplementation() {}
SVGGlyphElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGGlyphElementWrappingImplementation._wrap$ctor.prototype = SVGGlyphElementWrappingImplementation.prototype;
// ********** Code for SVGGlyphRefElementWrappingImplementation **************
$inherits(SVGGlyphRefElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGGlyphRefElementWrappingImplementation() {}
SVGGlyphRefElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGGlyphRefElementWrappingImplementation._wrap$ctor.prototype = SVGGlyphRefElementWrappingImplementation.prototype;
SVGGlyphRefElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGGradientElementWrappingImplementation **************
$inherits(SVGGradientElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGGradientElementWrappingImplementation() {}
SVGGradientElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGGradientElementWrappingImplementation._wrap$ctor.prototype = SVGGradientElementWrappingImplementation.prototype;
SVGGradientElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGHKernElementWrappingImplementation **************
$inherits(SVGHKernElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGHKernElementWrappingImplementation() {}
SVGHKernElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGHKernElementWrappingImplementation._wrap$ctor.prototype = SVGHKernElementWrappingImplementation.prototype;
// ********** Code for SVGImageElementWrappingImplementation **************
$inherits(SVGImageElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGImageElementWrappingImplementation() {}
SVGImageElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGImageElementWrappingImplementation._wrap$ctor.prototype = SVGImageElementWrappingImplementation.prototype;
SVGImageElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGImageElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGLineElementWrappingImplementation **************
$inherits(SVGLineElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGLineElementWrappingImplementation() {}
SVGLineElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGLineElementWrappingImplementation._wrap$ctor.prototype = SVGLineElementWrappingImplementation.prototype;
SVGLineElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGLinearGradientElementWrappingImplementation **************
$inherits(SVGLinearGradientElementWrappingImplementation, SVGGradientElementWrappingImplementation);
function SVGLinearGradientElementWrappingImplementation() {}
SVGLinearGradientElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGGradientElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGLinearGradientElementWrappingImplementation._wrap$ctor.prototype = SVGLinearGradientElementWrappingImplementation.prototype;
// ********** Code for SVGMPathElementWrappingImplementation **************
$inherits(SVGMPathElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMPathElementWrappingImplementation() {}
SVGMPathElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMPathElementWrappingImplementation._wrap$ctor.prototype = SVGMPathElementWrappingImplementation.prototype;
// ********** Code for SVGMarkerElementWrappingImplementation **************
$inherits(SVGMarkerElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMarkerElementWrappingImplementation() {}
SVGMarkerElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMarkerElementWrappingImplementation._wrap$ctor.prototype = SVGMarkerElementWrappingImplementation.prototype;
SVGMarkerElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGMaskElementWrappingImplementation **************
$inherits(SVGMaskElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMaskElementWrappingImplementation() {}
SVGMaskElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMaskElementWrappingImplementation._wrap$ctor.prototype = SVGMaskElementWrappingImplementation.prototype;
SVGMaskElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGMaskElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGMetadataElementWrappingImplementation **************
$inherits(SVGMetadataElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMetadataElementWrappingImplementation() {}
SVGMetadataElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMetadataElementWrappingImplementation._wrap$ctor.prototype = SVGMetadataElementWrappingImplementation.prototype;
// ********** Code for SVGMissingGlyphElementWrappingImplementation **************
$inherits(SVGMissingGlyphElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMissingGlyphElementWrappingImplementation() {}
SVGMissingGlyphElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMissingGlyphElementWrappingImplementation._wrap$ctor.prototype = SVGMissingGlyphElementWrappingImplementation.prototype;
// ********** Code for SVGPathElementWrappingImplementation **************
$inherits(SVGPathElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGPathElementWrappingImplementation() {}
SVGPathElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGPathElementWrappingImplementation._wrap$ctor.prototype = SVGPathElementWrappingImplementation.prototype;
SVGPathElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGPatternElementWrappingImplementation **************
$inherits(SVGPatternElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGPatternElementWrappingImplementation() {}
SVGPatternElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGPatternElementWrappingImplementation._wrap$ctor.prototype = SVGPatternElementWrappingImplementation.prototype;
SVGPatternElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGPatternElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGPolygonElementWrappingImplementation **************
$inherits(SVGPolygonElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGPolygonElementWrappingImplementation() {}
SVGPolygonElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGPolygonElementWrappingImplementation._wrap$ctor.prototype = SVGPolygonElementWrappingImplementation.prototype;
SVGPolygonElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGPolylineElementWrappingImplementation **************
$inherits(SVGPolylineElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGPolylineElementWrappingImplementation() {}
SVGPolylineElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGPolylineElementWrappingImplementation._wrap$ctor.prototype = SVGPolylineElementWrappingImplementation.prototype;
SVGPolylineElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGRadialGradientElementWrappingImplementation **************
$inherits(SVGRadialGradientElementWrappingImplementation, SVGGradientElementWrappingImplementation);
function SVGRadialGradientElementWrappingImplementation() {}
SVGRadialGradientElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGGradientElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGRadialGradientElementWrappingImplementation._wrap$ctor.prototype = SVGRadialGradientElementWrappingImplementation.prototype;
// ********** Code for SVGRectElementWrappingImplementation **************
$inherits(SVGRectElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGRectElementWrappingImplementation() {}
SVGRectElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGRectElementWrappingImplementation._wrap$ctor.prototype = SVGRectElementWrappingImplementation.prototype;
SVGRectElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGRectElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGScriptElementWrappingImplementation **************
$inherits(SVGScriptElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGScriptElementWrappingImplementation() {}
SVGScriptElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGScriptElementWrappingImplementation._wrap$ctor.prototype = SVGScriptElementWrappingImplementation.prototype;
// ********** Code for SVGSetElementWrappingImplementation **************
$inherits(SVGSetElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGSetElementWrappingImplementation() {}
SVGSetElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGSetElementWrappingImplementation._wrap$ctor.prototype = SVGSetElementWrappingImplementation.prototype;
// ********** Code for SVGStopElementWrappingImplementation **************
$inherits(SVGStopElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGStopElementWrappingImplementation() {}
SVGStopElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGStopElementWrappingImplementation._wrap$ctor.prototype = SVGStopElementWrappingImplementation.prototype;
SVGStopElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGStyleElementWrappingImplementation **************
$inherits(SVGStyleElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGStyleElementWrappingImplementation() {}
SVGStyleElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGStyleElementWrappingImplementation._wrap$ctor.prototype = SVGStyleElementWrappingImplementation.prototype;
// ********** Code for SVGSwitchElementWrappingImplementation **************
$inherits(SVGSwitchElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGSwitchElementWrappingImplementation() {}
SVGSwitchElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGSwitchElementWrappingImplementation._wrap$ctor.prototype = SVGSwitchElementWrappingImplementation.prototype;
SVGSwitchElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGSymbolElementWrappingImplementation **************
$inherits(SVGSymbolElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGSymbolElementWrappingImplementation() {}
SVGSymbolElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGSymbolElementWrappingImplementation._wrap$ctor.prototype = SVGSymbolElementWrappingImplementation.prototype;
SVGSymbolElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGTRefElementWrappingImplementation **************
$inherits(SVGTRefElementWrappingImplementation, SVGTextPositioningElementWrappingImplementation);
function SVGTRefElementWrappingImplementation() {}
SVGTRefElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGTextPositioningElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTRefElementWrappingImplementation._wrap$ctor.prototype = SVGTRefElementWrappingImplementation.prototype;
// ********** Code for SVGTSpanElementWrappingImplementation **************
$inherits(SVGTSpanElementWrappingImplementation, SVGTextPositioningElementWrappingImplementation);
function SVGTSpanElementWrappingImplementation() {}
SVGTSpanElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGTextPositioningElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTSpanElementWrappingImplementation._wrap$ctor.prototype = SVGTSpanElementWrappingImplementation.prototype;
// ********** Code for SVGTextElementWrappingImplementation **************
$inherits(SVGTextElementWrappingImplementation, SVGTextPositioningElementWrappingImplementation);
function SVGTextElementWrappingImplementation() {}
SVGTextElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGTextPositioningElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTextElementWrappingImplementation._wrap$ctor.prototype = SVGTextElementWrappingImplementation.prototype;
// ********** Code for SVGTextPathElementWrappingImplementation **************
$inherits(SVGTextPathElementWrappingImplementation, SVGTextContentElementWrappingImplementation);
function SVGTextPathElementWrappingImplementation() {}
SVGTextPathElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGTextContentElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTextPathElementWrappingImplementation._wrap$ctor.prototype = SVGTextPathElementWrappingImplementation.prototype;
// ********** Code for SVGTitleElementWrappingImplementation **************
$inherits(SVGTitleElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGTitleElementWrappingImplementation() {}
SVGTitleElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTitleElementWrappingImplementation._wrap$ctor.prototype = SVGTitleElementWrappingImplementation.prototype;
SVGTitleElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGUseElementWrappingImplementation **************
$inherits(SVGUseElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGUseElementWrappingImplementation() {}
SVGUseElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGUseElementWrappingImplementation._wrap$ctor.prototype = SVGUseElementWrappingImplementation.prototype;
SVGUseElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGUseElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for SVGVKernElementWrappingImplementation **************
$inherits(SVGVKernElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGVKernElementWrappingImplementation() {}
SVGVKernElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGVKernElementWrappingImplementation._wrap$ctor.prototype = SVGVKernElementWrappingImplementation.prototype;
// ********** Code for SVGViewElementWrappingImplementation **************
$inherits(SVGViewElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGViewElementWrappingImplementation() {}
SVGViewElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGViewElementWrappingImplementation._wrap$ctor.prototype = SVGViewElementWrappingImplementation.prototype;
// ********** Code for UIEventWrappingImplementation **************
$inherits(UIEventWrappingImplementation, EventWrappingImplementation);
function UIEventWrappingImplementation() {}
UIEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
UIEventWrappingImplementation._wrap$ctor.prototype = UIEventWrappingImplementation.prototype;
UIEventWrappingImplementation.prototype.get$pageX = function() {
  return this._ptr.get$pageX();
}
UIEventWrappingImplementation.prototype.get$pageY = function() {
  return this._ptr.get$pageY();
}
// ********** Code for SVGZoomEventWrappingImplementation **************
$inherits(SVGZoomEventWrappingImplementation, UIEventWrappingImplementation);
function SVGZoomEventWrappingImplementation() {}
SVGZoomEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGZoomEventWrappingImplementation._wrap$ctor.prototype = SVGZoomEventWrappingImplementation.prototype;
// ********** Code for ScriptElementWrappingImplementation **************
$inherits(ScriptElementWrappingImplementation, ElementWrappingImplementation);
function ScriptElementWrappingImplementation() {}
ScriptElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ScriptElementWrappingImplementation._wrap$ctor.prototype = ScriptElementWrappingImplementation.prototype;
ScriptElementWrappingImplementation.prototype.set$text = function(value) {
  this._ptr.set$text(value);
}
// ********** Code for SelectElementWrappingImplementation **************
$inherits(SelectElementWrappingImplementation, ElementWrappingImplementation);
function SelectElementWrappingImplementation() {}
SelectElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SelectElementWrappingImplementation._wrap$ctor.prototype = SelectElementWrappingImplementation.prototype;
SelectElementWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
SelectElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
SelectElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
SelectElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
SelectElementWrappingImplementation.prototype.item = function(index) {
  return LevelDom.wrapNode(this._ptr.item$1(index));
}
SelectElementWrappingImplementation.prototype.item$1 = SelectElementWrappingImplementation.prototype.item;
// ********** Code for SourceElementWrappingImplementation **************
$inherits(SourceElementWrappingImplementation, ElementWrappingImplementation);
function SourceElementWrappingImplementation() {}
SourceElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SourceElementWrappingImplementation._wrap$ctor.prototype = SourceElementWrappingImplementation.prototype;
// ********** Code for SpanElementWrappingImplementation **************
$inherits(SpanElementWrappingImplementation, ElementWrappingImplementation);
function SpanElementWrappingImplementation() {}
SpanElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SpanElementWrappingImplementation._wrap$ctor.prototype = SpanElementWrappingImplementation.prototype;
// ********** Code for SpeechInputEventWrappingImplementation **************
$inherits(SpeechInputEventWrappingImplementation, EventWrappingImplementation);
function SpeechInputEventWrappingImplementation() {}
SpeechInputEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
SpeechInputEventWrappingImplementation._wrap$ctor.prototype = SpeechInputEventWrappingImplementation.prototype;
// ********** Code for StyleElementWrappingImplementation **************
$inherits(StyleElementWrappingImplementation, ElementWrappingImplementation);
function StyleElementWrappingImplementation() {}
StyleElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
StyleElementWrappingImplementation._wrap$ctor.prototype = StyleElementWrappingImplementation.prototype;
// ********** Code for TableCaptionElementWrappingImplementation **************
$inherits(TableCaptionElementWrappingImplementation, ElementWrappingImplementation);
function TableCaptionElementWrappingImplementation() {}
TableCaptionElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableCaptionElementWrappingImplementation._wrap$ctor.prototype = TableCaptionElementWrappingImplementation.prototype;
// ********** Code for TableCellElementWrappingImplementation **************
$inherits(TableCellElementWrappingImplementation, ElementWrappingImplementation);
function TableCellElementWrappingImplementation() {}
TableCellElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableCellElementWrappingImplementation._wrap$ctor.prototype = TableCellElementWrappingImplementation.prototype;
TableCellElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
TableCellElementWrappingImplementation.prototype.set$height = function(value) {
  this._ptr.set$height(value);
}
TableCellElementWrappingImplementation.prototype.set$width = function(value) {
  this._ptr.set$width(value);
}
// ********** Code for TableColElementWrappingImplementation **************
$inherits(TableColElementWrappingImplementation, ElementWrappingImplementation);
function TableColElementWrappingImplementation() {}
TableColElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableColElementWrappingImplementation._wrap$ctor.prototype = TableColElementWrappingImplementation.prototype;
TableColElementWrappingImplementation.prototype.set$width = function(value) {
  this._ptr.set$width(value);
}
// ********** Code for TableElementWrappingImplementation **************
$inherits(TableElementWrappingImplementation, ElementWrappingImplementation);
function TableElementWrappingImplementation() {}
TableElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableElementWrappingImplementation._wrap$ctor.prototype = TableElementWrappingImplementation.prototype;
TableElementWrappingImplementation.prototype.set$width = function(value) {
  this._ptr.set$width(value);
}
// ********** Code for TableRowElementWrappingImplementation **************
$inherits(TableRowElementWrappingImplementation, ElementWrappingImplementation);
function TableRowElementWrappingImplementation() {}
TableRowElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableRowElementWrappingImplementation._wrap$ctor.prototype = TableRowElementWrappingImplementation.prototype;
// ********** Code for TableSectionElementWrappingImplementation **************
$inherits(TableSectionElementWrappingImplementation, ElementWrappingImplementation);
function TableSectionElementWrappingImplementation() {}
TableSectionElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableSectionElementWrappingImplementation._wrap$ctor.prototype = TableSectionElementWrappingImplementation.prototype;
// ********** Code for TextAreaElementWrappingImplementation **************
$inherits(TextAreaElementWrappingImplementation, ElementWrappingImplementation);
function TextAreaElementWrappingImplementation() {}
TextAreaElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TextAreaElementWrappingImplementation._wrap$ctor.prototype = TextAreaElementWrappingImplementation.prototype;
TextAreaElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
TextAreaElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
TextAreaElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for TitleElementWrappingImplementation **************
$inherits(TitleElementWrappingImplementation, ElementWrappingImplementation);
function TitleElementWrappingImplementation() {}
TitleElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TitleElementWrappingImplementation._wrap$ctor.prototype = TitleElementWrappingImplementation.prototype;
TitleElementWrappingImplementation.prototype.set$text = function(value) {
  this._ptr.set$text(value);
}
// ********** Code for TrackElementWrappingImplementation **************
$inherits(TrackElementWrappingImplementation, ElementWrappingImplementation);
function TrackElementWrappingImplementation() {}
TrackElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TrackElementWrappingImplementation._wrap$ctor.prototype = TrackElementWrappingImplementation.prototype;
// ********** Code for UListElementWrappingImplementation **************
$inherits(UListElementWrappingImplementation, ElementWrappingImplementation);
function UListElementWrappingImplementation() {}
UListElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
UListElementWrappingImplementation._wrap$ctor.prototype = UListElementWrappingImplementation.prototype;
// ********** Code for UnknownElementWrappingImplementation **************
$inherits(UnknownElementWrappingImplementation, ElementWrappingImplementation);
function UnknownElementWrappingImplementation() {}
UnknownElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
UnknownElementWrappingImplementation._wrap$ctor.prototype = UnknownElementWrappingImplementation.prototype;
// ********** Code for VideoElementWrappingImplementation **************
$inherits(VideoElementWrappingImplementation, MediaElementWrappingImplementation);
function VideoElementWrappingImplementation() {}
VideoElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  MediaElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
VideoElementWrappingImplementation._wrap$ctor.prototype = VideoElementWrappingImplementation.prototype;
VideoElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
VideoElementWrappingImplementation.prototype.set$height = function(value) {
  this._ptr.set$height(value);
}
VideoElementWrappingImplementation.prototype.set$width = function(value) {
  this._ptr.set$width(value);
}
// ********** Code for WebGLContextEventWrappingImplementation **************
$inherits(WebGLContextEventWrappingImplementation, EventWrappingImplementation);
function WebGLContextEventWrappingImplementation() {}
WebGLContextEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
WebGLContextEventWrappingImplementation._wrap$ctor.prototype = WebGLContextEventWrappingImplementation.prototype;
// ********** Code for LevelDom **************
function LevelDom() {}
LevelDom.wrapCSSStyleDeclaration = function(raw) {
  return raw == null ? null : raw.get$dartObjectLocalStorage() != null ? raw.get$dartObjectLocalStorage() : new CSSStyleDeclarationWrappingImplementation._wrap$ctor(raw);
}
LevelDom.wrapDocument = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "HTMLDocument":

      return new DocumentWrappingImplementation._wrap$ctor(raw, raw.get$documentElement());

    case "SVGDocument":

      return new SVGDocumentWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapElement = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "HTMLAnchorElement":

      return new AnchorElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLAreaElement":

      return new AreaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLAudioElement":

      return new AudioElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBRElement":

      return new BRElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBaseElement":

      return new BaseElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBodyElement":

      return new BodyElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLButtonElement":

      return new ButtonElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLCanvasElement":

      return new CanvasElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDListElement":

      return new DListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDataListElement":

      return new DataListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDetailsElement":

      return new DetailsElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDivElement":

      return new DivElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLElement":

      return new ElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLEmbedElement":

      return new EmbedElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFieldSetElement":

      return new FieldSetElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFontElement":

      return new FontElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFormElement":

      return new FormElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHRElement":

      return new HRElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHeadElement":

      return new HeadElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHeadingElement":

      return new HeadingElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHtmlElement":

      return new DocumentWrappingImplementation._wrap$ctor(raw.get$parentNode(), raw);

    case "HTMLIFrameElement":

      return new IFrameElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLImageElement":

      return new ImageElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLInputElement":

      return new InputElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLKeygenElement":

      return new KeygenElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLIElement":

      return new LIElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLabelElement":

      return new LabelElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLegendElement":

      return new LegendElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLinkElement":

      return new LinkElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMapElement":

      return new MapElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMarqueeElement":

      return new MarqueeElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMediaElement":

      return new MediaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMenuElement":

      return new MenuElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMetaElement":

      return new MetaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMeterElement":

      return new MeterElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLModElement":

      return new ModElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOListElement":

      return new OListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLObjectElement":

      return new ObjectElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOptGroupElement":

      return new OptGroupElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOptionElement":

      return new OptionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOutputElement":

      return new OutputElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLParagraphElement":

      return new ParagraphElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLParamElement":

      return new ParamElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLPreElement":

      return new PreElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLProgressElement":

      return new ProgressElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLQuoteElement":

      return new QuoteElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAElement":

      return new SVGAElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphDefElement":

      return new SVGAltGlyphDefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphElement":

      return new SVGAltGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphItemElement":

      return new SVGAltGlyphItemElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateColorElement":

      return new SVGAnimateColorElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateElement":

      return new SVGAnimateElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateMotionElement":

      return new SVGAnimateMotionElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateTransformElement":

      return new SVGAnimateTransformElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimationElement":

      return new SVGAnimationElementWrappingImplementation._wrap$ctor(raw);

    case "SVGCircleElement":

      return new SVGCircleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGClipPathElement":

      return new SVGClipPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGComponentTransferFunctionElement":

      return new SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor(raw);

    case "SVGCursorElement":

      return new SVGCursorElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDefsElement":

      return new SVGDefsElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDescElement":

      return new SVGDescElementWrappingImplementation._wrap$ctor(raw);

    case "SVGElement":

      return new SVGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGEllipseElement":

      return new SVGEllipseElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEBlendElement":

      return new SVGFEBlendElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEColorMatrixElement":

      return new SVGFEColorMatrixElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEComponentTransferElement":

      return new SVGFEComponentTransferElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEConvolveMatrixElement":

      return new SVGFEConvolveMatrixElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDiffuseLightingElement":

      return new SVGFEDiffuseLightingElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDisplacementMapElement":

      return new SVGFEDisplacementMapElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDistantLightElement":

      return new SVGFEDistantLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDropShadowElement":

      return new SVGFEDropShadowElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFloodElement":

      return new SVGFEFloodElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncAElement":

      return new SVGFEFuncAElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncBElement":

      return new SVGFEFuncBElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncGElement":

      return new SVGFEFuncGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncRElement":

      return new SVGFEFuncRElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEGaussianBlurElement":

      return new SVGFEGaussianBlurElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEImageElement":

      return new SVGFEImageElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEMergeElement":

      return new SVGFEMergeElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEMergeNodeElement":

      return new SVGFEMergeNodeElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEOffsetElement":

      return new SVGFEOffsetElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEPointLightElement":

      return new SVGFEPointLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFESpecularLightingElement":

      return new SVGFESpecularLightingElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFESpotLightElement":

      return new SVGFESpotLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFETileElement":

      return new SVGFETileElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFETurbulenceElement":

      return new SVGFETurbulenceElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFilterElement":

      return new SVGFilterElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontElement":

      return new SVGFontElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceElement":

      return new SVGFontFaceElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceFormatElement":

      return new SVGFontFaceFormatElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceNameElement":

      return new SVGFontFaceNameElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceSrcElement":

      return new SVGFontFaceSrcElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceUriElement":

      return new SVGFontFaceUriElementWrappingImplementation._wrap$ctor(raw);

    case "SVGForeignObjectElement":

      return new SVGForeignObjectElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGElement":

      return new SVGGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGlyphElement":

      return new SVGGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGlyphRefElement":

      return new SVGGlyphRefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGradientElement":

      return new SVGGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGHKernElement":

      return new SVGHKernElementWrappingImplementation._wrap$ctor(raw);

    case "SVGImageElement":

      return new SVGImageElementWrappingImplementation._wrap$ctor(raw);

    case "SVGLineElement":

      return new SVGLineElementWrappingImplementation._wrap$ctor(raw);

    case "SVGLinearGradientElement":

      return new SVGLinearGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMPathElement":

      return new SVGMPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMarkerElement":

      return new SVGMarkerElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMaskElement":

      return new SVGMaskElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMetadataElement":

      return new SVGMetadataElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMissingGlyphElement":

      return new SVGMissingGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPathElement":

      return new SVGPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPatternElement":

      return new SVGPatternElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPolygonElement":

      return new SVGPolygonElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPolylineElement":

      return new SVGPolylineElementWrappingImplementation._wrap$ctor(raw);

    case "SVGRadialGradientElement":

      return new SVGRadialGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGRectElement":

      return new SVGRectElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSVGElement":

      return new SVGSVGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGScriptElement":

      return new SVGScriptElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSetElement":

      return new SVGSetElementWrappingImplementation._wrap$ctor(raw);

    case "SVGStopElement":

      return new SVGStopElementWrappingImplementation._wrap$ctor(raw);

    case "SVGStyleElement":

      return new SVGStyleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSwitchElement":

      return new SVGSwitchElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSymbolElement":

      return new SVGSymbolElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTRefElement":

      return new SVGTRefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTSpanElement":

      return new SVGTSpanElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextContentElement":

      return new SVGTextContentElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextElement":

      return new SVGTextElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextPathElement":

      return new SVGTextPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextPositioningElement":

      return new SVGTextPositioningElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTitleElement":

      return new SVGTitleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGUseElement":

      return new SVGUseElementWrappingImplementation._wrap$ctor(raw);

    case "SVGVKernElement":

      return new SVGVKernElementWrappingImplementation._wrap$ctor(raw);

    case "SVGViewElement":

      return new SVGViewElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLScriptElement":

      return new ScriptElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSelectElement":

      return new SelectElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSourceElement":

      return new SourceElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSpanElement":

      return new SpanElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLStyleElement":

      return new StyleElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableCaptionElement":

      return new TableCaptionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableCellElement":

      return new TableCellElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableColElement":

      return new TableColElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableElement":

      return new TableElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableRowElement":

      return new TableRowElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableSectionElement":

      return new TableSectionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTextAreaElement":

      return new TextAreaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTitleElement":

      return new TitleElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTrackElement":

      return new TrackElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLUListElement":

      return new UListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLUnknownElement":

      return new UnknownElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLVideoElement":

      return new VideoElementWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapEvent = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "WebKitAnimationEvent":

      return new AnimationEventWrappingImplementation._wrap$ctor(raw);

    case "AudioProcessingEvent":

      return new AudioProcessingEventWrappingImplementation._wrap$ctor(raw);

    case "BeforeLoadEvent":

      return new BeforeLoadEventWrappingImplementation._wrap$ctor(raw);

    case "CloseEvent":

      return new CloseEventWrappingImplementation._wrap$ctor(raw);

    case "CompositionEvent":

      return new CompositionEventWrappingImplementation._wrap$ctor(raw);

    case "CustomEvent":

      return new CustomEventWrappingImplementation._wrap$ctor(raw);

    case "DeviceMotionEvent":

      return new DeviceMotionEventWrappingImplementation._wrap$ctor(raw);

    case "DeviceOrientationEvent":

      return new DeviceOrientationEventWrappingImplementation._wrap$ctor(raw);

    case "ErrorEvent":

      return new ErrorEventWrappingImplementation._wrap$ctor(raw);

    case "Event":

      return new EventWrappingImplementation._wrap$ctor(raw);

    case "HashChangeEvent":

      return new HashChangeEventWrappingImplementation._wrap$ctor(raw);

    case "IDBVersionChangeEvent":

      return new IDBVersionChangeEventWrappingImplementation._wrap$ctor(raw);

    case "KeyboardEvent":

      return new KeyboardEventWrappingImplementation._wrap$ctor(raw);

    case "MessageEvent":

      return new MessageEventWrappingImplementation._wrap$ctor(raw);

    case "MouseEvent":

      return new MouseEventWrappingImplementation._wrap$ctor(raw);

    case "MutationEvent":

      return new MutationEventWrappingImplementation._wrap$ctor(raw);

    case "OfflineAudioCompletionEvent":

      return new OfflineAudioCompletionEventWrappingImplementation._wrap$ctor(raw);

    case "OverflowEvent":

      return new OverflowEventWrappingImplementation._wrap$ctor(raw);

    case "PageTransitionEvent":

      return new PageTransitionEventWrappingImplementation._wrap$ctor(raw);

    case "PopStateEvent":

      return new PopStateEventWrappingImplementation._wrap$ctor(raw);

    case "ProgressEvent":

      return new ProgressEventWrappingImplementation._wrap$ctor(raw);

    case "SVGZoomEvent":

      return new SVGZoomEventWrappingImplementation._wrap$ctor(raw);

    case "SpeechInputEvent":

      return new SpeechInputEventWrappingImplementation._wrap$ctor(raw);

    case "StorageEvent":

      return new StorageEventWrappingImplementation._wrap$ctor(raw);

    case "TextEvent":

      return new TextEventWrappingImplementation._wrap$ctor(raw);

    case "TouchEvent":

      return new TouchEventWrappingImplementation._wrap$ctor(raw);

    case "WebKitTransitionEvent":

      return new TransitionEventWrappingImplementation._wrap$ctor(raw);

    case "UIEvent":

      return new UIEventWrappingImplementation._wrap$ctor(raw);

    case "WebGLContextEvent":

      return new WebGLContextEventWrappingImplementation._wrap$ctor(raw);

    case "WheelEvent":

      return new WheelEventWrappingImplementation._wrap$ctor(raw);

    case "XMLHttpRequestProgressEvent":

      return new XMLHttpRequestProgressEventWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapNode = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "HTMLAnchorElement":

      return new AnchorElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLAreaElement":

      return new AreaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLAudioElement":

      return new AudioElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBRElement":

      return new BRElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBaseElement":

      return new BaseElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBodyElement":

      return new BodyElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLButtonElement":

      return new ButtonElementWrappingImplementation._wrap$ctor(raw);

    case "CDATASection":

      return new CDATASectionWrappingImplementation._wrap$ctor(raw);

    case "HTMLCanvasElement":

      return new CanvasElementWrappingImplementation._wrap$ctor(raw);

    case "CharacterData":

      return new CharacterDataWrappingImplementation._wrap$ctor(raw);

    case "Comment":

      return new CommentWrappingImplementation._wrap$ctor(raw);

    case "HTMLDListElement":

      return new DListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDataListElement":

      return new DataListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDetailsElement":

      return new DetailsElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDivElement":

      return new DivElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDocument":

      return new DocumentWrappingImplementation._wrap$ctor(raw, raw.get$documentElement());

    case "DocumentFragment":

      return new DocumentFragmentWrappingImplementation._wrap$ctor(raw);

    case "HTMLElement":

      return new ElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLEmbedElement":

      return new EmbedElementWrappingImplementation._wrap$ctor(raw);

    case "Entity":

      return new EntityWrappingImplementation._wrap$ctor(raw);

    case "EntityReference":

      return new EntityReferenceWrappingImplementation._wrap$ctor(raw);

    case "HTMLFieldSetElement":

      return new FieldSetElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFontElement":

      return new FontElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFormElement":

      return new FormElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHRElement":

      return new HRElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHeadElement":

      return new HeadElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHeadingElement":

      return new HeadingElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHtmlElement":

      return new DocumentWrappingImplementation._wrap$ctor(raw.get$parentNode(), raw);

    case "HTMLIFrameElement":

      return new IFrameElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLImageElement":

      return new ImageElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLInputElement":

      return new InputElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLKeygenElement":

      return new KeygenElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLIElement":

      return new LIElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLabelElement":

      return new LabelElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLegendElement":

      return new LegendElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLinkElement":

      return new LinkElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMapElement":

      return new MapElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMarqueeElement":

      return new MarqueeElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMediaElement":

      return new MediaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMenuElement":

      return new MenuElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMetaElement":

      return new MetaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMeterElement":

      return new MeterElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLModElement":

      return new ModElementWrappingImplementation._wrap$ctor(raw);

    case "Node":

      return new NodeWrappingImplementation._wrap$ctor(raw);

    case "Notation":

      return new NotationWrappingImplementation._wrap$ctor(raw);

    case "HTMLOListElement":

      return new OListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLObjectElement":

      return new ObjectElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOptGroupElement":

      return new OptGroupElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOptionElement":

      return new OptionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOutputElement":

      return new OutputElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLParagraphElement":

      return new ParagraphElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLParamElement":

      return new ParamElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLPreElement":

      return new PreElementWrappingImplementation._wrap$ctor(raw);

    case "ProcessingInstruction":

      return new ProcessingInstructionWrappingImplementation._wrap$ctor(raw);

    case "HTMLProgressElement":

      return new ProgressElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLQuoteElement":

      return new QuoteElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAElement":

      return new SVGAElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphDefElement":

      return new SVGAltGlyphDefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphElement":

      return new SVGAltGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphItemElement":

      return new SVGAltGlyphItemElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateColorElement":

      return new SVGAnimateColorElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateElement":

      return new SVGAnimateElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateMotionElement":

      return new SVGAnimateMotionElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateTransformElement":

      return new SVGAnimateTransformElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimationElement":

      return new SVGAnimationElementWrappingImplementation._wrap$ctor(raw);

    case "SVGCircleElement":

      return new SVGCircleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGClipPathElement":

      return new SVGClipPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGComponentTransferFunctionElement":

      return new SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor(raw);

    case "SVGCursorElement":

      return new SVGCursorElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDefsElement":

      return new SVGDefsElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDescElement":

      return new SVGDescElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDocument":

      return new SVGDocumentWrappingImplementation._wrap$ctor(raw);

    case "SVGElement":

      return new SVGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGEllipseElement":

      return new SVGEllipseElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEBlendElement":

      return new SVGFEBlendElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEColorMatrixElement":

      return new SVGFEColorMatrixElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEComponentTransferElement":

      return new SVGFEComponentTransferElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEConvolveMatrixElement":

      return new SVGFEConvolveMatrixElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDiffuseLightingElement":

      return new SVGFEDiffuseLightingElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDisplacementMapElement":

      return new SVGFEDisplacementMapElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDistantLightElement":

      return new SVGFEDistantLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDropShadowElement":

      return new SVGFEDropShadowElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFloodElement":

      return new SVGFEFloodElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncAElement":

      return new SVGFEFuncAElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncBElement":

      return new SVGFEFuncBElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncGElement":

      return new SVGFEFuncGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncRElement":

      return new SVGFEFuncRElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEGaussianBlurElement":

      return new SVGFEGaussianBlurElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEImageElement":

      return new SVGFEImageElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEMergeElement":

      return new SVGFEMergeElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEMergeNodeElement":

      return new SVGFEMergeNodeElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEOffsetElement":

      return new SVGFEOffsetElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEPointLightElement":

      return new SVGFEPointLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFESpecularLightingElement":

      return new SVGFESpecularLightingElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFESpotLightElement":

      return new SVGFESpotLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFETileElement":

      return new SVGFETileElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFETurbulenceElement":

      return new SVGFETurbulenceElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFilterElement":

      return new SVGFilterElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontElement":

      return new SVGFontElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceElement":

      return new SVGFontFaceElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceFormatElement":

      return new SVGFontFaceFormatElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceNameElement":

      return new SVGFontFaceNameElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceSrcElement":

      return new SVGFontFaceSrcElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceUriElement":

      return new SVGFontFaceUriElementWrappingImplementation._wrap$ctor(raw);

    case "SVGForeignObjectElement":

      return new SVGForeignObjectElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGElement":

      return new SVGGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGlyphElement":

      return new SVGGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGlyphRefElement":

      return new SVGGlyphRefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGradientElement":

      return new SVGGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGHKernElement":

      return new SVGHKernElementWrappingImplementation._wrap$ctor(raw);

    case "SVGImageElement":

      return new SVGImageElementWrappingImplementation._wrap$ctor(raw);

    case "SVGLineElement":

      return new SVGLineElementWrappingImplementation._wrap$ctor(raw);

    case "SVGLinearGradientElement":

      return new SVGLinearGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMPathElement":

      return new SVGMPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMarkerElement":

      return new SVGMarkerElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMaskElement":

      return new SVGMaskElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMetadataElement":

      return new SVGMetadataElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMissingGlyphElement":

      return new SVGMissingGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPathElement":

      return new SVGPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPatternElement":

      return new SVGPatternElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPolygonElement":

      return new SVGPolygonElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPolylineElement":

      return new SVGPolylineElementWrappingImplementation._wrap$ctor(raw);

    case "SVGRadialGradientElement":

      return new SVGRadialGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGRectElement":

      return new SVGRectElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSVGElement":

      return new SVGSVGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGScriptElement":

      return new SVGScriptElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSetElement":

      return new SVGSetElementWrappingImplementation._wrap$ctor(raw);

    case "SVGStopElement":

      return new SVGStopElementWrappingImplementation._wrap$ctor(raw);

    case "SVGStyleElement":

      return new SVGStyleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSwitchElement":

      return new SVGSwitchElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSymbolElement":

      return new SVGSymbolElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTRefElement":

      return new SVGTRefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTSpanElement":

      return new SVGTSpanElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextContentElement":

      return new SVGTextContentElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextElement":

      return new SVGTextElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextPathElement":

      return new SVGTextPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextPositioningElement":

      return new SVGTextPositioningElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTitleElement":

      return new SVGTitleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGUseElement":

      return new SVGUseElementWrappingImplementation._wrap$ctor(raw);

    case "SVGVKernElement":

      return new SVGVKernElementWrappingImplementation._wrap$ctor(raw);

    case "SVGViewElement":

      return new SVGViewElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLScriptElement":

      return new ScriptElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSelectElement":

      return new SelectElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSourceElement":

      return new SourceElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSpanElement":

      return new SpanElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLStyleElement":

      return new StyleElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableCaptionElement":

      return new TableCaptionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableCellElement":

      return new TableCellElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableColElement":

      return new TableColElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableElement":

      return new TableElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableRowElement":

      return new TableRowElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableSectionElement":

      return new TableSectionElementWrappingImplementation._wrap$ctor(raw);

    case "Text":

      return new TextWrappingImplementation._wrap$ctor(raw);

    case "HTMLTextAreaElement":

      return new TextAreaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTitleElement":

      return new TitleElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTrackElement":

      return new TrackElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLUListElement":

      return new UListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLUnknownElement":

      return new UnknownElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLVideoElement":

      return new VideoElementWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapSVGAnimatedLength = function(raw) {
  return raw == null ? null : raw.get$dartObjectLocalStorage() != null ? raw.get$dartObjectLocalStorage() : new SVGAnimatedLengthWrappingImplementation._wrap$ctor(raw);
}
LevelDom.wrapWindow = function(raw) {
  return raw == null ? null : raw.get$dartObjectLocalStorage() != null ? raw.get$dartObjectLocalStorage() : new WindowWrappingImplementation._wrap$ctor(raw);
}
LevelDom.unwrap = function(raw) {
  return raw == null ? null : raw.get$_ptr();
}
LevelDom.initialize = function() {
  $globals.secretWindow = LevelDom.wrapWindow(get$window());
  $globals.secretDocument = LevelDom.wrapDocument(get$document());
}
// ********** Code for _Lists **************
function _Lists() {}
_Lists.indexOf = function(a, element, startIndex, endIndex) {
  if (startIndex >= a.get$length()) {
    return -1;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  for (var i = startIndex;
   i < endIndex; i++) {
    if ($eq(a.$index(i), element)) {
      return i;
    }
  }
  return -1;
}
// ********** Code for AnimationEventWrappingImplementation **************
$inherits(AnimationEventWrappingImplementation, EventWrappingImplementation);
function AnimationEventWrappingImplementation() {}
AnimationEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
AnimationEventWrappingImplementation._wrap$ctor.prototype = AnimationEventWrappingImplementation.prototype;
// ********** Code for BeforeLoadEventWrappingImplementation **************
$inherits(BeforeLoadEventWrappingImplementation, EventWrappingImplementation);
function BeforeLoadEventWrappingImplementation() {}
BeforeLoadEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
BeforeLoadEventWrappingImplementation._wrap$ctor.prototype = BeforeLoadEventWrappingImplementation.prototype;
// ********** Code for EventsImplementation **************
function EventsImplementation() {}
EventsImplementation._wrap$ctor = function(_ptr) {
  this._ptr = _ptr;
  // Initializers done
  this._listenerMap = new HashMapImplementation();
}
EventsImplementation._wrap$ctor.prototype = EventsImplementation.prototype;
EventsImplementation.prototype.get$_ptr = function() { return this._ptr; };
EventsImplementation.prototype.set$_ptr = function(value) { return this._ptr = value; };
EventsImplementation.prototype.$index = function(type) {
  return this._get(type.toLowerCase());
}
EventsImplementation.prototype._get = function(type) {
  var $this = this; // closure support
  return this._listenerMap.putIfAbsent(type, (function () {
    return new EventListenerListImplementation($this._ptr, type);
  })
  );
}
// ********** Code for ElementEventsImplementation **************
$inherits(ElementEventsImplementation, EventsImplementation);
function ElementEventsImplementation() {}
ElementEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  EventsImplementation._wrap$ctor.call(this, _ptr);
}
ElementEventsImplementation._wrap$ctor.prototype = ElementEventsImplementation.prototype;
ElementEventsImplementation.prototype.get$blur = function() {
  return this._get("blur");
}
ElementEventsImplementation.prototype.get$change = function() {
  return this._get("change");
}
ElementEventsImplementation.prototype.get$click = function() {
  return this._get("click");
}
ElementEventsImplementation.prototype.get$focus = function() {
  return this._get("focus");
}
ElementEventsImplementation.prototype.get$keyUp = function() {
  return this._get("keyup");
}
ElementEventsImplementation.prototype.get$mouseDown = function() {
  return this._get("mousedown");
}
ElementEventsImplementation.prototype.get$mouseMove = function() {
  return this._get("mousemove");
}
ElementEventsImplementation.prototype.get$mouseOut = function() {
  return this._get("mouseout");
}
ElementEventsImplementation.prototype.get$mouseOver = function() {
  return this._get("mouseover");
}
ElementEventsImplementation.prototype.get$mouseUp = function() {
  return this._get("mouseup");
}
ElementEventsImplementation.prototype.blur$0 = function() {
  return this.get$blur()();
};
ElementEventsImplementation.prototype.click$0 = function() {
  return this.get$click()();
};
ElementEventsImplementation.prototype.focus$0 = function() {
  return this.get$focus()();
};
// ********** Code for BodyElementEventsImplementation **************
$inherits(BodyElementEventsImplementation, ElementEventsImplementation);
function BodyElementEventsImplementation() {}
BodyElementEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  ElementEventsImplementation._wrap$ctor.call(this, _ptr);
}
BodyElementEventsImplementation._wrap$ctor.prototype = BodyElementEventsImplementation.prototype;
// ********** Code for BodyElementWrappingImplementation **************
$inherits(BodyElementWrappingImplementation, ElementWrappingImplementation);
function BodyElementWrappingImplementation() {}
BodyElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
BodyElementWrappingImplementation._wrap$ctor.prototype = BodyElementWrappingImplementation.prototype;
BodyElementWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new BodyElementEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for CloseEventWrappingImplementation **************
$inherits(CloseEventWrappingImplementation, EventWrappingImplementation);
function CloseEventWrappingImplementation() {}
CloseEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
CloseEventWrappingImplementation._wrap$ctor.prototype = CloseEventWrappingImplementation.prototype;
// ********** Code for CompositionEventWrappingImplementation **************
$inherits(CompositionEventWrappingImplementation, UIEventWrappingImplementation);
function CompositionEventWrappingImplementation() {}
CompositionEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
CompositionEventWrappingImplementation._wrap$ctor.prototype = CompositionEventWrappingImplementation.prototype;
// ********** Code for CSSStyleDeclarationWrappingImplementation **************
$inherits(CSSStyleDeclarationWrappingImplementation, DOMWrapperBase);
function CSSStyleDeclarationWrappingImplementation() {}
CSSStyleDeclarationWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
CSSStyleDeclarationWrappingImplementation._wrap$ctor.prototype = CSSStyleDeclarationWrappingImplementation.prototype;
CSSStyleDeclarationWrappingImplementation.get$_browserPrefix = function() {
  if ($globals.CSSStyleDeclarationWrappingImplementation__cachedBrowserPrefix == null) {
    if (_Device.get$isFirefox()) {
      $globals.CSSStyleDeclarationWrappingImplementation__cachedBrowserPrefix = '-moz-';
    }
    else {
      $globals.CSSStyleDeclarationWrappingImplementation__cachedBrowserPrefix = '-webkit-';
    }
  }
  return $globals.CSSStyleDeclarationWrappingImplementation__cachedBrowserPrefix;
}
CSSStyleDeclarationWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
CSSStyleDeclarationWrappingImplementation.prototype.getPropertyValue = function(propertyName) {
  return this._ptr.getPropertyValue$1(propertyName);
}
CSSStyleDeclarationWrappingImplementation.prototype.item = function(index) {
  return this._ptr.item$1(index);
}
CSSStyleDeclarationWrappingImplementation.prototype.setProperty = function(propertyName, value, priority) {
  this._ptr.setProperty$3(propertyName, value, priority);
}
CSSStyleDeclarationWrappingImplementation.prototype.get$typeName = function() {
  return "CSSStyleDeclaration";
}
CSSStyleDeclarationWrappingImplementation.prototype.set$background = function(value) {
  this.setProperty('background', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$borderBottom = function(value) {
  this.setProperty('border-bottom', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$borderColor = function(value) {
  this.setProperty('border-color', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$borderLeft = function(value) {
  this.setProperty('border-left', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$borderRadius = function(value) {
  this.setProperty('border-radius', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$borderRight = function(value) {
  this.setProperty('border-right', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$borderTop = function(value) {
  this.setProperty('border-top', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.get$bottom = function() {
  return this.getPropertyValue('bottom');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$boxSizing = function(value) {
  this.setProperty('box-sizing', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.get$color = function() {
  return this.getPropertyValue('color');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$color = function(value) {
  this.setProperty('color', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.get$content = function() {
  return this.getPropertyValue('content');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$cursor = function(value) {
  this.setProperty('cursor', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$display = function(value) {
  this.setProperty('display', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$filter = function(value) {
  this.setProperty(('' + CSSStyleDeclarationWrappingImplementation.get$_browserPrefix() + 'filter'), value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$fontFamily = function(value) {
  this.setProperty('font-family', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$fontSize = function(value) {
  this.setProperty('font-size', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.get$height = function() {
  return this.getPropertyValue('height');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$height = function(value) {
  this.setProperty('height', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.get$left = function() {
  return this.getPropertyValue('left');
}
CSSStyleDeclarationWrappingImplementation.prototype.get$margin = function() {
  return this.getPropertyValue('margin');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$margin = function(value) {
  this.setProperty('margin', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$maxHeight = function(value) {
  this.setProperty('max-height', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$maxWidth = function(value) {
  this.setProperty('max-width', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$minHeight = function(value) {
  this.setProperty('min-height', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$minWidth = function(value) {
  this.setProperty('min-width', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$opacity = function(value) {
  this.setProperty('opacity', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$overflow = function(value) {
  this.setProperty('overflow', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$padding = function(value) {
  this.setProperty('padding', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$position = function(value) {
  this.setProperty('position', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.get$right = function() {
  return this.getPropertyValue('right');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$textDecoration = function(value) {
  this.setProperty('text-decoration', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.get$top = function() {
  return this.getPropertyValue('top');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$visibility = function(value) {
  this.setProperty('visibility', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$width = function(value) {
  this.setProperty('width', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.set$zIndex = function(value) {
  this.setProperty('z-index', value, '');
}
CSSStyleDeclarationWrappingImplementation.prototype.getPropertyValue$1 = CSSStyleDeclarationWrappingImplementation.prototype.getPropertyValue;
CSSStyleDeclarationWrappingImplementation.prototype.item$1 = CSSStyleDeclarationWrappingImplementation.prototype.item;
CSSStyleDeclarationWrappingImplementation.prototype.setProperty$3 = CSSStyleDeclarationWrappingImplementation.prototype.setProperty;
// ********** Code for CustomEventWrappingImplementation **************
$inherits(CustomEventWrappingImplementation, EventWrappingImplementation);
function CustomEventWrappingImplementation() {}
CustomEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
CustomEventWrappingImplementation._wrap$ctor.prototype = CustomEventWrappingImplementation.prototype;
// ********** Code for _Device **************
function _Device() {}
_Device.get$userAgent = function() {
  return get$window().navigator.userAgent;
}
_Device.get$isFirefox = function() {
  return _Device.get$userAgent().contains("Firefox", 0);
}
// ********** Code for DeviceMotionEventWrappingImplementation **************
$inherits(DeviceMotionEventWrappingImplementation, EventWrappingImplementation);
function DeviceMotionEventWrappingImplementation() {}
DeviceMotionEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
DeviceMotionEventWrappingImplementation._wrap$ctor.prototype = DeviceMotionEventWrappingImplementation.prototype;
// ********** Code for DeviceOrientationEventWrappingImplementation **************
$inherits(DeviceOrientationEventWrappingImplementation, EventWrappingImplementation);
function DeviceOrientationEventWrappingImplementation() {}
DeviceOrientationEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
DeviceOrientationEventWrappingImplementation._wrap$ctor.prototype = DeviceOrientationEventWrappingImplementation.prototype;
// ********** Code for EmptyStyleDeclaration **************
$inherits(EmptyStyleDeclaration, CSSStyleDeclarationWrappingImplementation);
function EmptyStyleDeclaration() {
  // Initializers done
  CSSStyleDeclarationWrappingImplementation._wrap$ctor.call(this, get$document().createElement('div').style);
}
EmptyStyleDeclaration.prototype.setProperty = function(propertyName, value, priority) {
  $throw(new UnsupportedOperationException("Can't modify a frozen style declaration."));
}
EmptyStyleDeclaration.prototype.setProperty$3 = EmptyStyleDeclaration.prototype.setProperty;
// ********** Code for DocumentFragmentWrappingImplementation **************
$inherits(DocumentFragmentWrappingImplementation, NodeWrappingImplementation);
function DocumentFragmentWrappingImplementation() {}
DocumentFragmentWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
DocumentFragmentWrappingImplementation._wrap$ctor.prototype = DocumentFragmentWrappingImplementation.prototype;
DocumentFragmentWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new ElementEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
DocumentFragmentWrappingImplementation.prototype.get$tagName = function() {
  return "";
}
DocumentFragmentWrappingImplementation.prototype.get$parent = function() {
  return null;
}
DocumentFragmentWrappingImplementation.prototype.get$attributes = function() {
  return const$78/*const {}*/;
}
DocumentFragmentWrappingImplementation.prototype.get$style = function() {
  return new EmptyStyleDeclaration();
}
DocumentFragmentWrappingImplementation.prototype.blur = function() {

}
DocumentFragmentWrappingImplementation.prototype.get$blur = function() {
  return this.blur.bind(this);
}
DocumentFragmentWrappingImplementation.prototype.focus = function() {

}
DocumentFragmentWrappingImplementation.prototype.get$focus = function() {
  return this.focus.bind(this);
}
DocumentFragmentWrappingImplementation.prototype.blur$0 = DocumentFragmentWrappingImplementation.prototype.blur;
DocumentFragmentWrappingImplementation.prototype.focus$0 = DocumentFragmentWrappingImplementation.prototype.focus;
// ********** Code for DocumentEventsImplementation **************
$inherits(DocumentEventsImplementation, ElementEventsImplementation);
function DocumentEventsImplementation() {}
DocumentEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  ElementEventsImplementation._wrap$ctor.call(this, _ptr);
}
DocumentEventsImplementation._wrap$ctor.prototype = DocumentEventsImplementation.prototype;
// ********** Code for DocumentWrappingImplementation **************
$inherits(DocumentWrappingImplementation, ElementWrappingImplementation);
function DocumentWrappingImplementation() {}
DocumentWrappingImplementation._wrap$ctor = function(_documentPtr, ptr) {
  this._documentPtr = _documentPtr;
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
  this._documentPtr.get$dynamic().set$dartObjectLocalStorage(this);
}
DocumentWrappingImplementation._wrap$ctor.prototype = DocumentWrappingImplementation.prototype;
DocumentWrappingImplementation.prototype.get$parent = function() {
  return null;
}
DocumentWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new DocumentEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for ElementAttributeMap **************
function ElementAttributeMap() {}
ElementAttributeMap._wrap$ctor = function(_element) {
  this._element = _element;
  // Initializers done
}
ElementAttributeMap._wrap$ctor.prototype = ElementAttributeMap.prototype;
ElementAttributeMap.prototype.containsKey = function(key) {
  return this._element.hasAttribute$1(key);
}
ElementAttributeMap.prototype.$index = function(key) {
  return this._element.getAttribute$1(key);
}
ElementAttributeMap.prototype.$setindex = function(key, value) {
  this._element.setAttribute$2(key, value);
}
ElementAttributeMap.prototype.putIfAbsent = function(key, ifAbsent) {
  if (!this.containsKey(key)) {
    this.$setindex(key, ifAbsent());
  }
}
ElementAttributeMap.prototype.remove = function(key) {
  this._element.removeAttribute$1(key);
}
ElementAttributeMap.prototype.forEach = function(f) {
  var attributes = this._element.get$attributes();
  for (var i = 0, len = attributes.get$length();
   i < len; i++) {
    var item = attributes.item$1(i);
    f(item.get$name(), item.get$value());
  }
}
ElementAttributeMap.prototype.get$length = function() {
  return this._element.get$attributes().get$length();
}
ElementAttributeMap.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$2($0));
};
ElementAttributeMap.prototype.remove$1 = ElementAttributeMap.prototype.remove;
// ********** Code for ErrorEventWrappingImplementation **************
$inherits(ErrorEventWrappingImplementation, EventWrappingImplementation);
function ErrorEventWrappingImplementation() {}
ErrorEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
ErrorEventWrappingImplementation._wrap$ctor.prototype = ErrorEventWrappingImplementation.prototype;
// ********** Code for _EventListenerWrapper **************
function _EventListenerWrapper(raw, wrapped, useCapture) {
  this.raw = raw;
  this.wrapped = wrapped;
  this.useCapture = useCapture;
  // Initializers done
}
// ********** Code for EventListenerListImplementation **************
function EventListenerListImplementation(_ptr, _type) {
  this._ptr = _ptr;
  this._htmlimpl_type = _type;
  this._wrappers = new Array();
  // Initializers done
}
EventListenerListImplementation.prototype.get$_ptr = function() { return this._ptr; };
EventListenerListImplementation.prototype.add = function(listener, useCapture) {
  this._add(listener, useCapture);
  return this;
}
EventListenerListImplementation.prototype.remove = function(listener, useCapture) {
  this._remove(listener, useCapture);
  return this;
}
EventListenerListImplementation.prototype._add = function(listener, useCapture) {
  this._ptr.addEventListener$3(this._htmlimpl_type, this._findOrAddWrapper(listener, useCapture), useCapture);
}
EventListenerListImplementation.prototype._remove = function(listener, useCapture) {
  var wrapper = this._removeWrapper(listener, useCapture);
  if (wrapper != null) {
    this._ptr.removeEventListener$3(this._htmlimpl_type, wrapper, useCapture);
  }
}
EventListenerListImplementation.prototype._removeWrapper = function(listener, useCapture) {
  if (this._wrappers == null) {
    return null;
  }
  for (var i = 0;
   i < this._wrappers.get$length(); i++) {
    var wrapper = this._wrappers.$index(i);
    if (wrapper.raw === listener && $eq(wrapper.useCapture, useCapture)) {
      if (i + 1 != this._wrappers.get$length()) {
        this._wrappers.$setindex(i, this._wrappers.removeLast());
      }
      else {
        this._wrappers.removeLast();
      }
      return wrapper.wrapped;
    }
  }
  return null;
}
EventListenerListImplementation.prototype._findOrAddWrapper = function(listener, useCapture) {
  if (this._wrappers == null) {
    this._wrappers = [];
  }
  else {
    var $$list = this._wrappers;
    for (var $$i = 0;$$i < $$list.get$length(); $$i++) {
      var wrapper = $$list.$index($$i);
      if (wrapper.raw === listener && $eq(wrapper.useCapture, useCapture)) {
        return wrapper.wrapped;
      }
    }
  }
  var wrapped = (function (e) {
    listener(LevelDom.wrapEvent(e));
  })
  ;
  this._wrappers.add(new _EventListenerWrapper(listener, wrapped, useCapture));
  return wrapped;
}
EventListenerListImplementation.prototype.add$1 = function($0) {
  return this.add(to$call$1($0), false);
};
EventListenerListImplementation.prototype.remove$1 = function($0) {
  return this.remove(to$call$1($0), false);
};
// ********** Code for HashChangeEventWrappingImplementation **************
$inherits(HashChangeEventWrappingImplementation, EventWrappingImplementation);
function HashChangeEventWrappingImplementation() {}
HashChangeEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
HashChangeEventWrappingImplementation._wrap$ctor.prototype = HashChangeEventWrappingImplementation.prototype;
// ********** Code for KeyboardEventWrappingImplementation **************
$inherits(KeyboardEventWrappingImplementation, UIEventWrappingImplementation);
function KeyboardEventWrappingImplementation() {}
KeyboardEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
KeyboardEventWrappingImplementation._wrap$ctor.prototype = KeyboardEventWrappingImplementation.prototype;
// ********** Code for MessageEventWrappingImplementation **************
$inherits(MessageEventWrappingImplementation, EventWrappingImplementation);
function MessageEventWrappingImplementation() {}
MessageEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
MessageEventWrappingImplementation._wrap$ctor.prototype = MessageEventWrappingImplementation.prototype;
// ********** Code for MouseEventWrappingImplementation **************
$inherits(MouseEventWrappingImplementation, UIEventWrappingImplementation);
function MouseEventWrappingImplementation() {}
MouseEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
MouseEventWrappingImplementation._wrap$ctor.prototype = MouseEventWrappingImplementation.prototype;
// ********** Code for MutationEventWrappingImplementation **************
$inherits(MutationEventWrappingImplementation, EventWrappingImplementation);
function MutationEventWrappingImplementation() {}
MutationEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
MutationEventWrappingImplementation._wrap$ctor.prototype = MutationEventWrappingImplementation.prototype;
// ********** Code for _ChildrenNodeList **************
function _ChildrenNodeList() {}
_ChildrenNodeList._wrap$ctor = function(node) {
  this._childNodes = node.get$childNodes();
  this._node = node;
  // Initializers done
}
_ChildrenNodeList._wrap$ctor.prototype = _ChildrenNodeList.prototype;
_ChildrenNodeList.prototype._toList = function() {
  var output = new Array(this._childNodes.get$length());
  for (var i = 0, len = this._childNodes.get$length();
   i < len; i++) {
    output.$setindex(i, LevelDom.wrapNode(this._childNodes.$index(i)));
  }
  return output;
}
_ChildrenNodeList.prototype.forEach = function(f) {
  return this._toList().forEach(f);
}
_ChildrenNodeList.prototype.filter = function(f) {
  var output = new Array();
  this.forEach((function (element) {
    if (f(element)) {
      output.add(element);
    }
  })
  );
  return output;
}
_ChildrenNodeList.prototype.isEmpty = function() {
  return !this._node.hasChildNodes$0();
}
_ChildrenNodeList.prototype.get$length = function() {
  return this._childNodes.get$length();
}
_ChildrenNodeList.prototype.$index = function(index) {
  return LevelDom.wrapNode(this._childNodes.$index(index));
}
_ChildrenNodeList.prototype.$setindex = function(index, value) {
  this._childNodes.$setindex(index, LevelDom.unwrap(value));
}
_ChildrenNodeList.prototype.add = function(value) {
  this._node.appendChild$1(LevelDom.unwrap(value));
  return value;
}
_ChildrenNodeList.prototype.iterator = function() {
  return this._toList().iterator();
}
_ChildrenNodeList.prototype.removeRange = function(start, length) {
  $throw(const$85/*const NotImplementedException()*/);
}
_ChildrenNodeList.prototype.indexOf = function(element, start) {
  return _Lists.indexOf(this, element, start, this.get$length());
}
_ChildrenNodeList.prototype.clear = function() {
  this._node.set$textContent('');
}
_ChildrenNodeList.prototype.removeLast = function() {
  var last_ = this.last();
  if (last_ != null) {
    this._node.removeChild$1(LevelDom.unwrap(last_));
  }
  return last_;
}
_ChildrenNodeList.prototype.last = function() {
  return LevelDom.wrapNode(this._node.get$lastChild());
}
_ChildrenNodeList.prototype.add$1 = _ChildrenNodeList.prototype.add;
_ChildrenNodeList.prototype.forEach$1 = function($0) {
  return this.forEach(to$call$1($0));
};
// ********** Code for ObjectElementWrappingImplementation **************
$inherits(ObjectElementWrappingImplementation, ElementWrappingImplementation);
function ObjectElementWrappingImplementation() {}
ObjectElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ObjectElementWrappingImplementation._wrap$ctor.prototype = ObjectElementWrappingImplementation.prototype;
ObjectElementWrappingImplementation.prototype.get$height = function() {
  return this._ptr.get$height();
}
ObjectElementWrappingImplementation.prototype.set$height = function(value) {
  this._ptr.set$height(value);
}
ObjectElementWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
ObjectElementWrappingImplementation.prototype.set$width = function(value) {
  this._ptr.set$width(value);
}
// ********** Code for OverflowEventWrappingImplementation **************
$inherits(OverflowEventWrappingImplementation, EventWrappingImplementation);
function OverflowEventWrappingImplementation() {}
OverflowEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
OverflowEventWrappingImplementation._wrap$ctor.prototype = OverflowEventWrappingImplementation.prototype;
// ********** Code for PageTransitionEventWrappingImplementation **************
$inherits(PageTransitionEventWrappingImplementation, EventWrappingImplementation);
function PageTransitionEventWrappingImplementation() {}
PageTransitionEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
PageTransitionEventWrappingImplementation._wrap$ctor.prototype = PageTransitionEventWrappingImplementation.prototype;
// ********** Code for PopStateEventWrappingImplementation **************
$inherits(PopStateEventWrappingImplementation, EventWrappingImplementation);
function PopStateEventWrappingImplementation() {}
PopStateEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
PopStateEventWrappingImplementation._wrap$ctor.prototype = PopStateEventWrappingImplementation.prototype;
// ********** Code for ProgressEventWrappingImplementation **************
$inherits(ProgressEventWrappingImplementation, EventWrappingImplementation);
function ProgressEventWrappingImplementation() {}
ProgressEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
ProgressEventWrappingImplementation._wrap$ctor.prototype = ProgressEventWrappingImplementation.prototype;
// ********** Code for StorageEventWrappingImplementation **************
$inherits(StorageEventWrappingImplementation, EventWrappingImplementation);
function StorageEventWrappingImplementation() {}
StorageEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
StorageEventWrappingImplementation._wrap$ctor.prototype = StorageEventWrappingImplementation.prototype;
// ********** Code for SVGDocumentWrappingImplementation **************
$inherits(SVGDocumentWrappingImplementation, DocumentWrappingImplementation);
function SVGDocumentWrappingImplementation() {}
SVGDocumentWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  DocumentWrappingImplementation._wrap$ctor.call(this, ptr, ptr.rootElement);
}
SVGDocumentWrappingImplementation._wrap$ctor.prototype = SVGDocumentWrappingImplementation.prototype;
// ********** Code for SVGSVGElementWrappingImplementation **************
$inherits(SVGSVGElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGSVGElementWrappingImplementation() {}
SVGSVGElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGSVGElementWrappingImplementation._wrap$ctor.prototype = SVGSVGElementWrappingImplementation.prototype;
SVGSVGElementWrappingImplementation.prototype.get$height = function() {
  return LevelDom.wrapSVGAnimatedLength(this._ptr.get$height());
}
SVGSVGElementWrappingImplementation.prototype.get$style = function() {
  return LevelDom.wrapCSSStyleDeclaration(this._ptr.get$style());
}
// ********** Code for TextEventWrappingImplementation **************
$inherits(TextEventWrappingImplementation, UIEventWrappingImplementation);
function TextEventWrappingImplementation() {}
TextEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
TextEventWrappingImplementation._wrap$ctor.prototype = TextEventWrappingImplementation.prototype;
// ********** Code for TouchEventWrappingImplementation **************
$inherits(TouchEventWrappingImplementation, UIEventWrappingImplementation);
function TouchEventWrappingImplementation() {}
TouchEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
TouchEventWrappingImplementation._wrap$ctor.prototype = TouchEventWrappingImplementation.prototype;
// ********** Code for TransitionEventWrappingImplementation **************
$inherits(TransitionEventWrappingImplementation, EventWrappingImplementation);
function TransitionEventWrappingImplementation() {}
TransitionEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
TransitionEventWrappingImplementation._wrap$ctor.prototype = TransitionEventWrappingImplementation.prototype;
// ********** Code for WheelEventWrappingImplementation **************
$inherits(WheelEventWrappingImplementation, UIEventWrappingImplementation);
function WheelEventWrappingImplementation() {}
WheelEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
WheelEventWrappingImplementation._wrap$ctor.prototype = WheelEventWrappingImplementation.prototype;
// ********** Code for WindowEventsImplementation **************
$inherits(WindowEventsImplementation, EventsImplementation);
function WindowEventsImplementation() {}
WindowEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  EventsImplementation._wrap$ctor.call(this, _ptr);
}
WindowEventsImplementation._wrap$ctor.prototype = WindowEventsImplementation.prototype;
WindowEventsImplementation.prototype.get$blur = function() {
  return this._get('blur');
}
WindowEventsImplementation.prototype.get$change = function() {
  return this._get('change');
}
WindowEventsImplementation.prototype.get$click = function() {
  return this._get('click');
}
WindowEventsImplementation.prototype.get$focus = function() {
  return this._get('focus');
}
WindowEventsImplementation.prototype.get$keyUp = function() {
  return this._get('keyup');
}
WindowEventsImplementation.prototype.get$mouseDown = function() {
  return this._get('mousedown');
}
WindowEventsImplementation.prototype.get$mouseMove = function() {
  return this._get('mousemove');
}
WindowEventsImplementation.prototype.get$mouseOut = function() {
  return this._get('mouseout');
}
WindowEventsImplementation.prototype.get$mouseOver = function() {
  return this._get('mouseover');
}
WindowEventsImplementation.prototype.get$mouseUp = function() {
  return this._get('mouseup');
}
WindowEventsImplementation.prototype.get$resize = function() {
  return this._get('resize');
}
WindowEventsImplementation.prototype.blur$0 = function() {
  return this.get$blur()();
};
WindowEventsImplementation.prototype.click$0 = function() {
  return this.get$click()();
};
WindowEventsImplementation.prototype.focus$0 = function() {
  return this.get$focus()();
};
// ********** Code for WindowWrappingImplementation **************
$inherits(WindowWrappingImplementation, EventTargetWrappingImplementation);
function WindowWrappingImplementation() {}
WindowWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
WindowWrappingImplementation._wrap$ctor.prototype = WindowWrappingImplementation.prototype;
WindowWrappingImplementation.prototype.get$document = function() {
  return LevelDom.wrapDocument(this._ptr.get$document());
}
WindowWrappingImplementation.prototype.get$innerHeight = function() {
  return this._ptr.get$innerHeight();
}
WindowWrappingImplementation.prototype.get$innerWidth = function() {
  return this._ptr.get$innerWidth();
}
WindowWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
WindowWrappingImplementation.prototype.get$name = function() {
  return this._ptr.get$name();
}
WindowWrappingImplementation.prototype.get$parent = function() {
  return LevelDom.wrapWindow(this._ptr.get$parent());
}
WindowWrappingImplementation.prototype.set$parent = function(value) {
  this._ptr.set$parent(LevelDom.unwrap(value));
}
WindowWrappingImplementation.prototype.get$top = function() {
  return LevelDom.wrapWindow(this._ptr.get$top());
}
WindowWrappingImplementation.prototype.blur = function() {
  this._ptr.blur$0();
}
WindowWrappingImplementation.prototype.get$blur = function() {
  return this.blur.bind(this);
}
WindowWrappingImplementation.prototype.focus = function() {
  this._ptr.focus$0();
}
WindowWrappingImplementation.prototype.get$focus = function() {
  return this.focus.bind(this);
}
WindowWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new WindowEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
WindowWrappingImplementation.prototype.blur$0 = WindowWrappingImplementation.prototype.blur;
WindowWrappingImplementation.prototype.focus$0 = WindowWrappingImplementation.prototype.focus;
// ********** Code for XMLHttpRequestProgressEventWrappingImplementation **************
$inherits(XMLHttpRequestProgressEventWrappingImplementation, ProgressEventWrappingImplementation);
function XMLHttpRequestProgressEventWrappingImplementation() {}
XMLHttpRequestProgressEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ProgressEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
XMLHttpRequestProgressEventWrappingImplementation._wrap$ctor.prototype = XMLHttpRequestProgressEventWrappingImplementation.prototype;
// ********** Code for top level **************
var _pendingRequests;
var _pendingMeasurementFrameCallbacks;
//  ********** Library html **************
// ********** Code for top level **************
var secretWindow;
var secretDocument;
function html_get$window() {
  if ($globals.secretWindow == null) {
    LevelDom.initialize();
  }
  return $globals.secretWindow;
}
//  ********** Library LUCAStudios_UI_Framework_Core **************
// ********** Code for HashableObject **************
function HashableObject() {
  this._assignedHash = $globals.HashableObject__hashNum++;
  // Initializers done
}
HashableObject.prototype.hashCode = function() {
  return this._assignedHash;
}
HashableObject.prototype.hashCode$0 = HashableObject.prototype.hashCode;
// ********** Code for LucaObject **************
$inherits(LucaObject, HashableObject);
function LucaObject() {
  this._stateBag = new HashMapImplementation();
  this._bindings = new Array();
  this._frameworkProperties = new HashSetImplementation();
  // Initializers done
  HashableObject.call(this);
}
LucaObject.prototype.get$_stateBag = function() { return this._stateBag; };
// ********** Code for FrameworkObject **************
$inherits(FrameworkObject, LucaObject);
function FrameworkObject() {
  this._isLoaded = false
  this.click = new _FrameworkEventImplementation();
  this.gotFocus = new _FrameworkEventImplementation();
  this.lostFocus = new _FrameworkEventImplementation();
  this.mouseEnter = new _FrameworkEventImplementation();
  this.mouseLeave = new _FrameworkEventImplementation();
  this.sizeChanged = new _FrameworkEventImplementation();
  this.mouseMove = new _FrameworkEventImplementation();
  this.mouseDown = new _FrameworkEventImplementation();
  this.mouseUp = new _FrameworkEventImplementation();
  this.attachedPropertyChanged = new _FrameworkEventImplementation();
  // Initializers done
  LucaObject.call(this);
  this.CreateElement();
  _Dom.appendClass(this._component, "luca_ui_frameworkobject");
  this._rawElement = LevelDom.unwrap(this._component);
  this._initFrameworkObjectProperties();
  this._initFrameworkObjectEvents();
}
FrameworkObject.prototype.get$_component = function() { return this._component; };
FrameworkObject.prototype.set$_component = function(value) { return this._component = value; };
FrameworkObject.prototype.get$click = function() { return this.click; };
FrameworkObject.prototype.get$mouseDown = function() { return this.mouseDown; };
FrameworkObject.prototype.get$mouseMove = function() { return this.mouseMove; };
FrameworkObject.prototype.get$mouseUp = function() { return this.mouseUp; };
FrameworkObject.prototype.get$attachedPropertyChanged = function() { return this.attachedPropertyChanged; };
FrameworkObject.prototype._initFrameworkObjectEvents = function() {
  var $this = this; // closure support
  this._component.get$on().get$mouseUp().add$1((function (e) {
    if (!$this.mouseUp.get$hasHandlers()) return;
    var x = ($sub(e.get$pageX(), $this._rawElement.get$offsetLeft()));
    var y = ($sub(e.get$pageY(), $this._rawElement.get$offsetTop()));
    var args = new MouseEventArgs(x, y, e.get$pageX(), e.get$pageY());
    $this.mouseUp.invoke($this, args);
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
  this._component.get$on().get$mouseDown().add$1((function (e) {
    if (!$this.mouseDown.get$hasHandlers()) return;
    var x = ($sub(e.get$pageX(), $this._rawElement.get$offsetLeft()));
    var y = ($sub(e.get$pageY(), $this._rawElement.get$offsetTop()));
    $this.mouseDown.invoke($this, new MouseEventArgs(x, y, e.get$pageX(), e.get$pageY()));
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
  this._component.get$on().get$mouseMove().add$1((function (e) {
    if (!$this.mouseMove.get$hasHandlers()) return;
    var x = ($sub(e.get$pageX(), $this._rawElement.get$offsetLeft()));
    var y = ($sub(e.get$pageY(), $this._rawElement.get$offsetTop()));
    $this.mouseMove.invoke($this, new MouseEventArgs(x, y, e.get$pageX(), e.get$pageY()));
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
  this._component.get$on().get$click().add$1((function (e) {
    if (!$this.click.get$hasHandlers()) return;
    var x = ($sub(e.get$pageX(), $this._rawElement.get$offsetLeft()));
    var y = ($sub(e.get$pageY(), $this._rawElement.get$offsetTop()));
    $this.click.invoke($this, new MouseEventArgs(x, y, e.get$pageX(), e.get$pageY()));
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
  this._component.get$on().get$focus().add$1((function (e) {
    if (!$this.gotFocus.get$hasHandlers()) return;
    $this.gotFocus.invoke($this, new EventArgs());
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
  this._component.get$on().get$blur().add$1((function (e) {
    if (!$this.lostFocus.get$hasHandlers()) return;
    $this.lostFocus.invoke($this, new EventArgs());
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
  this._component.get$on().get$mouseOver().add$1((function (e) {
    if (!$this.mouseEnter.get$hasHandlers()) return;
    $this.mouseEnter.invoke($this, new EventArgs());
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
  this._component.get$on().get$mouseOut().add$1((function (e) {
    if (!$this.mouseLeave.get$hasHandlers()) return;
    $this.mouseLeave.invoke($this, new EventArgs());
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
}
FrameworkObject.prototype._initFrameworkObjectProperties = function() {
  var $this = this; // closure support
  this.htmlIDProperty = new FrameworkProperty(this, "htmlID", (function (value) {
    $this._component.get$attributes().$setindex("ID", value);
  })
  );
  this.opacityProperty = new FrameworkProperty(this, "opacity", (function (value) {
    if (value < 0.0) value = 0.0;
    if (value > 1.0) value = 0.1;
    $this._component.get$style().set$opacity(value.toStringAsPrecision$1(2));
    $this._component.get$style().set$filter(("alpha(opacity=" + (value * 100) + ")"));
  })
  , 1.0);
  this.visibilityProperty = new FrameworkProperty(this, "visibility", (function (value) {
    if (value._bool) {
      $this._component.get$style().set$visibility("visible");
      $this._component.get$style().set$display($this._stateBag.$index("display") == null ? "inherit" : $this._stateBag.$index("display"));
      $this._stateBag.remove("display");
    }
    else {
      $this._stateBag.$setindex("display", $this._component.get$style().getPropertyValue("display"));
      $this._component.get$style().set$visibility("hidden");
      $this._component.get$style().set$display("none");
    }
  })
  , const$4/*Visibility.visible*/);
  this.nameProperty = new FrameworkProperty(this, "name", (function (value) {

  })
  , "");
}
FrameworkObject.prototype.get$name = function() {
  return getValue(this.nameProperty);
}
FrameworkObject.prototype.set$name = function(value) {
  return setValue(this.nameProperty, value);
}
FrameworkObject.setAttachedValue = function(element, property, value) {
  var aDepInfo = $globals.LucaSystem__attachedProperties.$index(property);
  if ($eq(aDepInfo.$index(element), value)) return;
  var oldValue = aDepInfo.$index(element);
  aDepInfo.$setindex(element, value);
  element.attachedPropertyChanged.invoke(element, new AttachedPropertyChangedEventArgs(element, property, value));
  property.propertyChanging.invoke(property, new PropertyChangingEventArgs(oldValue, value));
}
FrameworkObject.getAttachedValue = function(element, property) {
  if (property == null) return null;
  var aDepInfo = $globals.LucaSystem__attachedProperties.$index(property);
  return (aDepInfo.containsKey(element)) ? aDepInfo.$index(element) : null;
}
FrameworkObject.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("div");
}
FrameworkObject.prototype.updateLayout = function() {

}
FrameworkObject.prototype.get$_type = function() {
  return "FrameworkObject";
}
FrameworkObject.prototype.click$0 = function() {
  return this.click();
};
FrameworkObject.prototype.updateLayout$0 = FrameworkObject.prototype.updateLayout;
// ********** Code for LucaSystem **************
$inherits(LucaSystem, FrameworkObject);
function LucaSystem() {}
LucaSystem._init$ctor = function(rootID) {
  // Initializers done
  FrameworkObject.call(this);
  $globals.LucaSystem__ref = this;
  this._initLucaSystem(rootID);
}
LucaSystem._init$ctor.prototype = LucaSystem.prototype;
LucaSystem.LucaSystem$factory = function() {
  if ($globals.LucaSystem__ref != null) return $globals.LucaSystem__ref;
  return new LucaSystem._init$ctor("#LucaUIHost"/*LucaSystem._defaultRootID*/);
}
LucaSystem.prototype._initLucaSystem = function(rootID) {
  var $this = this; // closure support
  $globals.LucaSystem__domRootElement = html_get$window().get$document().query(rootID);
  $globals.LucaSystem_visualRoot = new _RootElement();
  $globals.LucaSystem__objectRegistry = new HashMapImplementation();
  $globals.LucaSystem_presentationProviders = new HashSetImplementation();
  if ($globals.LucaSystem__domRootElement == null) $throw(new FrameworkException(("Unable to locate required root element (must be <div id='" + rootID + "' />)")));
  if ($globals.LucaSystem__domRootElement.get$tagName() != "DIV") $throw(new FrameworkException(("Root element for LUCA UI must be a <div>. Element given was a <" + $globals.LucaSystem__domRootElement.get$tagName().toLowerCase() + ">")));
  $globals.LucaSystem__attachedProperties = new HashMapImplementation();
  $globals.LucaSystem_windowWidthProperty = new FrameworkProperty($globals.LucaSystem__ref, "windowWidth", (function (value) {

  })
  , html_get$window().get$innerWidth());
  $globals.LucaSystem_windowHeightProperty = new FrameworkProperty($globals.LucaSystem__ref, "windowHeight", (function (value) {

  })
  , html_get$window().get$innerHeight());
  html_get$window().get$on().get$resize().add$1((function (e) {
    if ($globals.LucaSystem__ref == null) return;
    if (html_get$window().get$innerWidth() != LucaSystem.get$windowWidth()) {
      setValue($globals.LucaSystem_windowWidthProperty, html_get$window().get$innerWidth());
    }
    if (html_get$window().get$innerHeight() != LucaSystem.get$windowHeight()) {
      setValue($globals.LucaSystem_windowHeightProperty, html_get$window().get$innerHeight());
    }
  })
  );
  LucaSystem._registerCoreElements();
  $globals.LucaSystem_initialized = true;
}
LucaSystem._registerCoreElements = function() {
  LucaSystem.registerElement(new StackPanel());
  LucaSystem.registerElement(new Grid());
  LucaSystem.registerElement(new Border());
  LucaSystem.registerElement(new TextArea());
  LucaSystem.registerElement(new LayoutCanvas());
  LucaSystem.registerElement(new Button());
  LucaSystem.registerElement(new TextBox());
  LucaSystem.registerElement(new TextBlock());
  LucaSystem.registerElement(new Slider());
  LucaSystem.registerElement(new CheckBox());
  LucaSystem.registerElement(new RadioButton());
  LucaSystem.registerElement(new Hyperlink());
  LucaSystem.registerElement(new Image());
  $globals.LucaSystem__objectRegistry.$setindex("grid.column", Grid.setColumn);
  $globals.LucaSystem__objectRegistry.$setindex("grid.row", Grid.setRow);
  $globals.LucaSystem__objectRegistry.$setindex("grid.columnspan", Grid.setColumnSpan);
  $globals.LucaSystem__objectRegistry.$setindex("grid.rowspan", Grid.setRowSpan);
  $globals.LucaSystem__objectRegistry.$setindex("layoutcanvas.top", LayoutCanvas.setTop);
  $globals.LucaSystem__objectRegistry.$setindex("layoutcanvas.left", LayoutCanvas.setLeft);
}
LucaSystem.registerElement = function(object) {
  $globals.LucaSystem__objectRegistry.$setindex(object.get$_type().trim().toLowerCase(), object);
}
LucaSystem.get$windowWidth = function() {
  return ($globals.LucaSystem__ref != null) ? getValue($globals.LucaSystem_windowWidthProperty) : -1;
}
LucaSystem.get$windowHeight = function() {
  return ($globals.LucaSystem__ref != null) ? getValue($globals.LucaSystem_windowHeightProperty) : -1;
}
LucaSystem.set$rootView = function(view) {
  $globals.LucaSystem__currentRootView = view;
  $globals.LucaSystem_visualRoot.set$content(view.get$rootVisual());
  $globals.LucaSystem__domRootElement.get$nodes().clear();
  $globals.LucaSystem__domRootElement.get$nodes().add($globals.LucaSystem_visualRoot._component);
}
LucaSystem.renderRaw = function(element) {
  LucaSystem.set$rootView(new _ViewFactory(element));
}
LucaSystem.makeFlexBox = function(element) {
  var e = element._component;
  e.get$style().setProperty$3("display", "-webkit-box");
  e.get$style().setProperty$3("display", "-moz-box");
  e.get$style().setProperty$3("display", "box");
}
LucaSystem.setFlexBoxOrientation = function(element, orientation) {
  LucaSystem.makeFlexBox(element);
  var e = element._component;
  switch (orientation) {
    case const$372/*Orientation.horizontal*/:

      e.get$style().setProperty$3("-webkit-box-orient", "horizontal");
      e.get$style().setProperty$3("-moz-box-orient", "horizontal");
      e.get$style().setProperty$3("box-orient", "horizontal");
      break;

    case const$374/*Orientation.vertical*/:

      e.get$style().setProperty$3("-webkit-box-orient", "vertical");
      e.get$style().setProperty$3("-moz-box-orient", "vertical");
      e.get$style().setProperty$3("box-orient", "vertical");
      break;

  }
}
LucaSystem.setHorizontalFlexBoxAlignment = function(element, alignment) {
  LucaSystem.makeFlexBox(element);
  var e = element._component;
  switch (alignment) {
    case const$55/*HorizontalAlignment.Left*/:

      e.get$style().setProperty$3("-webkit-box-pack", "start");
      e.get$style().setProperty$3("-moz-box-pack", "start");
      e.get$style().setProperty$3("box-pack", "start");
      break;

    case const$57/*HorizontalAlignment.Right*/:

      e.get$style().setProperty$3("-webkit-box-pack", "end");
      e.get$style().setProperty$3("-moz-box-pack", "end");
      e.get$style().setProperty$3("box-pack", "end");
      break;

    case const$51/*HorizontalAlignment.Center*/:

      e.get$style().setProperty$3("-webkit-box-pack", "center");
      e.get$style().setProperty$3("-moz-box-pack", "center");
      e.get$style().setProperty$3("box-pack", "center");
      break;

    case const$53/*HorizontalAlignment.Stretch*/:

      e.get$style().setProperty$3("-webkit-box-flex", "1.0");
      e.get$style().setProperty$3("-moz-box-flex", "1.0");
      e.get$style().setProperty$3("box-flex", "1.0");
      break;

  }
}
LucaSystem.setVerticalFlexBoxAlignment = function(element, alignment) {
  LucaSystem.makeFlexBox(element);
  var e = element._component;
  switch (alignment) {
    case const$65/*VerticalAlignment.Top*/:

      e.get$style().setProperty$3("-webkit-box-align", "start");
      e.get$style().setProperty$3("-moz-box-align", "start");
      e.get$style().setProperty$3("box-align", "start");
      break;

    case const$67/*VerticalAlignment.Bottom*/:

      e.get$style().setProperty$3("-webkit-box-align", "end");
      e.get$style().setProperty$3("-moz-box-align", "end");
      e.get$style().setProperty$3("box-align", "end");
      break;

    case const$61/*VerticalAlignment.Center*/:

      e.get$style().setProperty$3("-webkit-box-align", "center");
      e.get$style().setProperty$3("-moz-box-align", "center");
      e.get$style().setProperty$3("box-align", "center");
      break;

    case const$63/*VerticalAlignment.Stretch*/:

      e.get$style().setProperty$3("-webkit-box-align", "stretch");
      e.get$style().setProperty$3("-moz-box-align", "stretch");
      e.get$style().setProperty$3("box-align", "stretch");
      break;

  }
}
LucaSystem.prototype.get$_type = function() {
  return "LucaSystem";
}
// ********** Code for EventArgs **************
$inherits(EventArgs, LucaObject);
function EventArgs() {
  // Initializers done
  LucaObject.call(this);
}
// ********** Code for AttachedPropertyChangedEventArgs **************
$inherits(AttachedPropertyChangedEventArgs, EventArgs);
function AttachedPropertyChangedEventArgs(element, property, value) {
  this.element = element;
  this.property = property;
  this.value = value;
  // Initializers done
  EventArgs.call(this);
}
AttachedPropertyChangedEventArgs.prototype.get$element = function() { return this.element; };
AttachedPropertyChangedEventArgs.prototype.get$value = function() { return this.value; };
// ********** Code for FrameworkPropertyBase **************
$inherits(FrameworkPropertyBase, LucaObject);
function FrameworkPropertyBase(sourceObject, propertyName, propertyChangedCallback) {
  this.sourceObject = sourceObject;
  this.propertyName = propertyName;
  this.propertyChangedCallback = propertyChangedCallback;
  this.propertyChanging = new _FrameworkEventImplementation();
  // Initializers done
  LucaObject.call(this);
}
// ********** Code for AttachedFrameworkProperty **************
$inherits(AttachedFrameworkProperty, FrameworkPropertyBase);
function AttachedFrameworkProperty(propertyName, propertyChangedCallback) {
  // Initializers done
  FrameworkPropertyBase.call(this, null, propertyName, propertyChangedCallback);
  $globals.LucaSystem__attachedProperties.$setindex(this, new HashMapImplementation());
}
// ********** Code for FrameworkProperty **************
$inherits(FrameworkProperty, FrameworkPropertyBase);
function FrameworkProperty(sourceObject, propertyName, propertyChangedCallback, value) {
  this.value = value;
  // Initializers done
  FrameworkPropertyBase.call(this, sourceObject, propertyName, propertyChangedCallback);
  this.sourceObject._frameworkProperties.add(this);
  if (propertyChangedCallback == null) propertyChangedCallback = (function (v) {

  })
  ;
  if (this.value != null) {
    propertyChangedCallback.call$1(this.value);
    this.propertyChanging.invoke(this, new PropertyChangingEventArgs(null, this.value));
  }
}
FrameworkProperty.prototype.get$value = function() { return this.value; };
FrameworkProperty.prototype.set$value = function(value) { return this.value = value; };
// ********** Code for ObservableList **************
$inherits(ObservableList, ListFactory_T);
function ObservableList() {
  this.listChanged = new _FrameworkEventImplementation();
  // Initializers done
  Array.call(this);
}
ObservableList.prototype.$setindex = function(index, value) {
  if (index < 0 || this.length <= index) {
    $throw(new IndexOutOfRangeException(index));
  }
  var oldValue = this[index];
  ListFactory.prototype.$setindex.call(this, index, value);
  this._notifySingleOldAndNew(oldValue, value);
}
ObservableList.prototype.add = function(element) {
  ListFactory.prototype.add.call(this, element);
  this._notifySingleNew(element);
}
ObservableList.prototype.remove = function(element) {
  if (this.indexOf(element) == -1) return;
  ListFactory.prototype.removeRange.call(this, this.indexOf(element), 1);
  this._notifySingleOld(element);
}
ObservableList.prototype.clear = function() {
  var c = this;
  ListFactory.prototype.clear.call(this);
  this.listChanged.invoke(this, new ListChangedEventArgs_T(c, new Array()));
}
ObservableList.prototype.removeLast = function() {
  var item = this.last();
  ListFactory.prototype.removeLast.call(this);
  this._notifySingleOld(item);
  return item;
}
ObservableList.prototype.removeRange = function(start, length) {
  var l = this.getRange(start, length);
  ListFactory.prototype.removeRange.call(this, start, length);
  this.listChanged.invoke(this, new ListChangedEventArgs_T(l, new Array()));
}
ObservableList.prototype._notifySingleOld = function(oldItem) {
  var ol = new Array();
  ol.add$1(oldItem);
  this.listChanged.invoke(this, new ListChangedEventArgs_T(ol, new Array()));
}
ObservableList.prototype._notifySingleNew = function(newItem) {
  var nl = new Array();
  nl.add(newItem);
  this.listChanged.invoke(this, new ListChangedEventArgs_T(new Array(), nl));
}
ObservableList.prototype._notifySingleOldAndNew = function(oldItem, newItem) {
  var ol = new Array();
  var nl = new Array();
  ol.add$1(oldItem);
  nl.add$1(newItem);
  this.listChanged.invoke(this, new ListChangedEventArgs_T(ol, nl));
}
ObservableList.prototype.add$1 = ObservableList.prototype.add;
ObservableList.prototype.remove$1 = ObservableList.prototype.remove;
// ********** Code for ObservableList_ColumnDefinition **************
$inherits(ObservableList_ColumnDefinition, ObservableList);
function ObservableList_ColumnDefinition() {
  this.listChanged = new _FrameworkEventImplementation();
  // Initializers done
  Array.call(this);
}
// ********** Code for ObservableList_FrameworkElement **************
$inherits(ObservableList_FrameworkElement, ObservableList);
function ObservableList_FrameworkElement() {
  this.listChanged = new _FrameworkEventImplementation();
  // Initializers done
  Array.call(this);
}
ObservableList_FrameworkElement.prototype.add = function(element) {
  ListFactory.prototype.add.call(this, element);
  this._notifySingleNew(element);
}
ObservableList_FrameworkElement.prototype._notifySingleNew = function(newItem) {
  var nl = new Array();
  nl.add(newItem);
  this.listChanged.invoke(this, new ListChangedEventArgs_FrameworkElement(new Array(), nl));
}
// ********** Code for ObservableList_RowDefinition **************
$inherits(ObservableList_RowDefinition, ObservableList);
function ObservableList_RowDefinition() {
  this.listChanged = new _FrameworkEventImplementation();
  // Initializers done
  Array.call(this);
}
ObservableList_RowDefinition.prototype.add = function(element) {
  ListFactory.prototype.add.call(this, element);
  this._notifySingleNew(element);
}
ObservableList_RowDefinition.prototype._notifySingleNew = function(newItem) {
  var nl = new Array();
  nl.add(newItem);
  this.listChanged.invoke(this, new ListChangedEventArgs_RowDefinition(new Array(), nl));
}
// ********** Code for _BindingImplementation **************
$inherits(_BindingImplementation, LucaObject);
function _BindingImplementation(_fromProperty, _toProperty, bindingMode, converter) {
  this.bindingSet = false
  this._fromProperty = _fromProperty;
  this._toProperty = _toProperty;
  this.bindingMode = bindingMode;
  this.converter = converter;
  // Initializers done
  LucaObject.call(this);
  if (this._fromProperty == null || this._toProperty == null) $throw(const$71/*const FrameworkException("Attempted to bind to/from null FrameworkProperty.")*/);
  if (this._fromProperty === this._toProperty) $throw(const$72/*const FrameworkException("Attempted to bind same property together.")*/);
  this._registerBinding();
}
_BindingImplementation.loose$ctor = function(_fromProperty, _toProperty, bindingMode, converter) {
  this.bindingSet = false
  this._fromProperty = _fromProperty;
  this._toProperty = _toProperty;
  this.bindingMode = bindingMode;
  this.converter = converter;
  // Initializers done
  LucaObject.call(this);
  if (this._fromProperty == null || this._toProperty == null) return;
  if (this._fromProperty === this._toProperty) $throw(const$72/*const FrameworkException("Attempted to bind same property together.")*/);
  this._registerBinding();
}
_BindingImplementation.loose$ctor.prototype = _BindingImplementation.prototype;
_BindingImplementation.prototype.get$bindingMode = function() { return this.bindingMode; };
_BindingImplementation.prototype.set$bindingMode = function(value) { return this.bindingMode = value; };
_BindingImplementation.prototype.get$converter = function() { return this.converter; };
_BindingImplementation.prototype.get$_fromProperty = function() { return this._fromProperty; };
_BindingImplementation.prototype.get$_toProperty = function() { return this._toProperty; };
_BindingImplementation.prototype._registerBinding = function() {
  this.bindingSet = true;
  if ($eq(this.bindingMode, const$12/*BindingMode.TwoWay*/)) {
    this._fromProperty.sourceObject._bindings.add(this);
    var other = new _BindingImplementation.loose$ctor(this._toProperty, this._fromProperty, const$73/*BindingMode.OneWay*/, const$75/*const _DefaultConverter()*/);
    this._twoWayPartner = other;
    other._twoWayPartner = this;
    this._toProperty.sourceObject._bindings.last().set$bindingMode(const$12/*BindingMode.TwoWay*/);
  }
  else {
    this._fromProperty.sourceObject._bindings.add(this);
    _BindingImplementation._executeBindingsFor(this._fromProperty);
  }
}
_BindingImplementation.prototype.unregister = function() {
  if (!this.bindingSet) return;
  this.bindingSet = false;
  var i = this._fromProperty.sourceObject._bindings.indexOf(this, 0);
  if (i == -1) $throw(const$11/*const FrameworkException("Binding not found in binding registry when attempting to unregister.")*/);
  this._fromProperty.sourceObject._bindings.removeRange(i, 1);
  if ($ne(this.bindingMode, const$12/*BindingMode.TwoWay*/)) return;
  this._twoWayPartner.bindingSet = false;
  var pi = this._twoWayPartner._fromProperty.sourceObject._bindings.indexOf(this._twoWayPartner, 0);
  if (pi == -1) $throw(const$14/*const FrameworkException("Two-Way partner binding not found in binding registry when attempting to unregister.")*/);
  this._twoWayPartner._fromProperty.sourceObject._bindings.removeRange(pi, 1);
}
_BindingImplementation._executeBindingsFor = function(property) {
  var $$list = property.sourceObject._bindings;
  for (var $$i = 0;$$i < $$list.get$length(); $$i++) {
    var binding = $$list.$index($$i);
    setValue(binding.get$_toProperty(), binding.get$converter().convert$1(getValue(binding.get$_fromProperty())));
    if ($eq(binding.get$bindingMode(), const$9/*BindingMode.OneTime*/)) binding.unregister$0();
  }
}
_BindingImplementation.prototype.unregister$0 = _BindingImplementation.prototype.unregister;
// ********** Code for _DefaultConverter **************
function _DefaultConverter() {
  // Initializers done
}
_DefaultConverter.prototype.convert = function(value, parameter) {
  return value;
}
_DefaultConverter.prototype.convert$1 = _DefaultConverter.prototype.convert;
// ********** Code for FrameworkElement **************
$inherits(FrameworkElement, FrameworkObject);
function FrameworkElement() {
  this.loaded = new _FrameworkEventImplementation();
  this.unloaded = new _FrameworkEventImplementation();
  this.whOffset = new Tuple_int.with$ctor(0, 0);
  // Initializers done
  FrameworkObject.call(this);
  _Dom.appendClass(this._component, "luca_ui_frameworkelement");
  this.set$style(new _StyleTemplateImplementation());
  this._initFrameworkProperties();
  this._component.get$attributes().$setindex("data-lucaui-element", this.get$_type());
  this._initFrameworkEvents();
}
FrameworkElement.prototype._initFrameworkProperties = function() {
  var $this = this; // closure support
  this.zOrderProperty = new FrameworkProperty(this, "zOrder", (function (value) {
    $this._component.get$style().set$zIndex(value.toString$0());
  })
  );
  this.zOrderProperty.stringToValueConverter = const$6/*const StringToNumericConverter()*/;
  this.marginProperty = new FrameworkProperty(this, "margin", (function (value) {
    $this._component.get$style().set$margin(('' + value.get$top() + 'px ' + value.get$right() + 'px ' + value.get$bottom() + 'px ' + value.get$left() + 'px'));
  })
  , new Thickness(0));
  this.marginProperty.stringToValueConverter = const$7/*const StringToThicknessConverter()*/;
  this.actualWidthProperty = new FrameworkProperty(this, "actualWidth", (function (value) {

  })
  , 0);
  this.actualWidthProperty.stringToValueConverter = const$6/*const StringToNumericConverter()*/;
  this.actualHeightProperty = new FrameworkProperty(this, "actualHeight", (function (value) {

  })
  , 0);
  this.actualHeightProperty.stringToValueConverter = const$6/*const StringToNumericConverter()*/;
  this.widthProperty = new FrameworkProperty(this, "width", (function (value) {
    return $this.calculateWidth(value);
  })
  , "auto");
  this.widthProperty.stringToValueConverter = const$6/*const StringToNumericConverter()*/;
  this.heightProperty = new FrameworkProperty(this, "height", (function (value) {
    return $this.calculateHeight(value);
  })
  , "auto");
  this.heightProperty.stringToValueConverter = const$6/*const StringToNumericConverter()*/;
  this.minHeightProperty = new FrameworkProperty(this, "minHeight", (function (value) {
    if (value > $this.get$maxHeight()) {
      value = $this.set$minHeight($this.get$maxHeight());
    }
    if ($this.get$height() != null && $this.get$height() < value) {
      $this.set$height(value);
    }
    $this._component.get$style().set$minHeight(('' + value.toString$0() + 'px'));
  })
  );
  this.minHeightProperty.stringToValueConverter = const$6/*const StringToNumericConverter()*/;
  this.maxHeightProperty = new FrameworkProperty(this, "maxHeight", (function (value) {
    if (value < $this.get$minHeight()) value = $this.set$maxHeight($this.get$minHeight());
    if ($this.get$height() != null && $this.get$height() > value) $this.set$height(value);
    $this._component.get$style().set$maxHeight(('' + value.toString$0() + 'px'));
  })
  );
  this.maxHeightProperty.stringToValueConverter = const$6/*const StringToNumericConverter()*/;
  this.minWidthProperty = new FrameworkProperty(this, "minWidth", (function (value) {
    if (value > $this.get$maxWidth()) value = $this.set$minWidth($this.get$maxWidth());
    if ($this.get$width() != null && $this.get$width() < value) $this.set$width(value);
    $this._component.get$style().set$minWidth(('' + value.toString$0() + 'px'));
  })
  );
  this.minWidthProperty.stringToValueConverter = const$6/*const StringToNumericConverter()*/;
  this.maxWidthProperty = new FrameworkProperty(this, "maxWidth", (function (value) {
    if (value < $this.get$minWidth()) value = $this.set$maxWidth($this.get$minWidth());
    if ($this.get$width() != null && $this.get$width() > value) $this.set$width(value);
    $this._component.get$style().set$maxWidth(('' + value.toString$0() + 'px'));
  })
  );
  this.maxWidthProperty.stringToValueConverter = const$6/*const StringToNumericConverter()*/;
  this.cursorProperty = new FrameworkProperty(this, "cursor", (function (value) {
    $this._component.get$style().set$cursor(value._str);
  })
  );
  this.cursorProperty.stringToValueConverter = const$50/*const StringToCursorConverter()*/;
  this.tagProperty = new FrameworkProperty(this, "tag", (function (value) {

  })
  );
  this.dataContextProperty = new FrameworkProperty(this, "dataContext", (function (value) {

  })
  );
  this.horizontalAlignmentProperty = new FrameworkProperty(this, "horizontalAlignment", (function (value) {
    $this.updateLayout();
  })
  , const$55/*HorizontalAlignment.Left*/);
  this.horizontalAlignmentProperty.stringToValueConverter = const$60/*const StringToHorizontalAlignmentConverter()*/;
  this.verticalAlignmentProperty = new FrameworkProperty(this, "verticalAlignment", (function (value) {
    $this.updateLayout();
  })
  , const$65/*VerticalAlignment.Top*/);
  this.verticalAlignmentProperty.stringToValueConverter = const$70/*const StringToVerticalAlignmentConverter()*/;
}
FrameworkElement.prototype.get$style = function() {
  return this._style;
}
FrameworkElement.prototype.set$style = function(value) {
  if (value == null) {
    this._style._unregisterElement(this);
    this.set$style(new _StyleTemplateImplementation());
  }
  else {
    if (this._style != null) this._style._unregisterElement(this);
    value._registerElement(this);
    this._style = value;
  }
}
FrameworkElement.prototype.get$innerWidth = function() {
  return $sub(this._rawElement.get$clientWidth(), (this.get$margin().left + this.get$margin().right));
}
FrameworkElement.prototype.get$innerHeight = function() {
  return $sub(this._rawElement.get$clientHeight(), (this.get$margin().top + this.get$margin().bottom));
}
FrameworkElement.prototype.get$actualWidth = function() {
  return getValue(this.actualWidthProperty);
}
FrameworkElement.prototype.get$actualHeight = function() {
  return getValue(this.actualHeightProperty);
}
FrameworkElement.prototype.get$parent = function() {
  return this._parent;
}
FrameworkElement.prototype.set$parent = function(value) {
  return this._parent = value;
}
FrameworkElement.prototype.get$margin = function() {
  return getValue(this.marginProperty);
}
FrameworkElement.prototype.set$margin = function(value) {
  return setValue(this.marginProperty, value);
}
FrameworkElement.prototype.get$width = function() {
  return getValue(this.widthProperty);
}
FrameworkElement.prototype.set$width = function(value) {
  return setValue(this.widthProperty, value);
}
FrameworkElement.prototype.get$height = function() {
  return getValue(this.heightProperty);
}
FrameworkElement.prototype.set$height = function(value) {
  return setValue(this.heightProperty, value);
}
FrameworkElement.prototype.get$minWidth = function() {
  return getValue(this.minWidthProperty);
}
FrameworkElement.prototype.set$minWidth = function(value) {
  return setValue(this.minWidthProperty, value);
}
FrameworkElement.prototype.get$maxWidth = function() {
  return getValue(this.maxWidthProperty);
}
FrameworkElement.prototype.set$maxWidth = function(value) {
  return setValue(this.maxWidthProperty, value);
}
FrameworkElement.prototype.get$minHeight = function() {
  return getValue(this.minHeightProperty);
}
FrameworkElement.prototype.set$minHeight = function(value) {
  return setValue(this.minHeightProperty, value);
}
FrameworkElement.prototype.get$maxHeight = function() {
  return getValue(this.maxHeightProperty);
}
FrameworkElement.prototype.set$maxHeight = function(value) {
  return setValue(this.maxHeightProperty, value);
}
FrameworkElement.prototype.get$verticalAlignment = function() {
  return getValue(this.verticalAlignmentProperty);
}
FrameworkElement.prototype.set$verticalAlignment = function(value) {
  return setValue(this.verticalAlignmentProperty, value);
}
FrameworkElement.prototype.get$horizontalAlignment = function() {
  return getValue(this.horizontalAlignmentProperty);
}
FrameworkElement.prototype.set$horizontalAlignment = function(value) {
  return setValue(this.horizontalAlignmentProperty, value);
}
FrameworkElement.prototype.calculateWidth = function(value) {
  if (value == "auto") {
    this._component.get$style().set$width("auto");
    setValue(this.actualWidthProperty, this.get$innerWidth());
    if ((this instanceof Panel)) this.updateLayout();
    return;
  }
  if (this.get$minWidth() != null && value < this.get$minWidth()) {
    this.set$width(this.get$minWidth());
  }
  if (this.get$maxWidth() != null && value > this.get$maxWidth()) {
    this.set$width(this.get$maxWidth());
  }
  var adjustedValue = value - (this.get$margin().left + this.get$margin().right);
  this._component.get$style().set$width(('' + adjustedValue.toString() + 'px'));
  setValue(this.actualWidthProperty, adjustedValue);
  if ((this instanceof Panel)) this.updateLayout();
}
FrameworkElement.prototype.calculateHeight = function(value) {
  if (value == "auto") {
    this._component.get$style().set$height("auto");
    setValue(this.actualHeightProperty, this.get$innerHeight());
    if ((this instanceof Panel)) this.updateLayout();
    return;
  }
  if (this.get$minHeight() != null && value < this.get$minHeight()) {
    this.set$height(this.get$minHeight());
  }
  if (this.get$maxHeight() != null && value > this.get$maxHeight()) {
    this.set$height(this.get$maxHeight());
  }
  var adjustedValue = value - (this.get$margin().top + this.get$margin().bottom);
  this._component.get$style().set$height(('' + adjustedValue.toString() + 'px'));
  setValue(this.actualHeightProperty, adjustedValue);
  if ((this instanceof Panel)) this.updateLayout();
}
FrameworkElement.prototype._initFrameworkEvents = function() {
  var $this = this; // closure support
  this._rawElement.addEventListener$2("DOMNodeInsertedIntoDocument", (function (e) {
    $this._isLoaded = true;
    $this.updateLayout();
    $this.loaded.invoke($this, new EventArgs());
  })
  );
  this._rawElement.addEventListener$2("DOMNodeRemovedFromDocument", (function (e) {
    $this._isLoaded = false;
    $this.unloaded.invoke($this, new EventArgs());
  })
  );
}
FrameworkElement.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("div");
}
FrameworkElement.prototype.updateLayout = function() {

}
FrameworkElement.prototype.get$_type = function() {
  return "FrameworkElement";
}
FrameworkElement.prototype.updateLayout$0 = FrameworkElement.prototype.updateLayout;
// ********** Code for _ContainerElement **************
$inherits(_ContainerElement, FrameworkElement);
function _ContainerElement() {
  // Initializers done
  FrameworkElement.call(this);
}
_ContainerElement.prototype._registerChild = function(child) {
  if (child._containerParent == null) $throw(const$82/*const FrameworkException("Child registration requires parental assignment.")*/);
  child._stateBag.$setindex("__horizontalAlignmentEventReference__"/*_ContainerElement._horizontalReference*/, child.horizontalAlignmentProperty.propertyChanging.$add(this.get$_onHorizontalAlignmentChanged()));
  child._stateBag.$setindex("__verticalAlignmentEventReference__"/*_ContainerElement._verticalReference*/, child.verticalAlignmentProperty.propertyChanging.$add(this.get$_onVerticalAlignmentChanged()));
  this._updateHorizontalAlignmentSettings(child);
  this._updateVerticalAlignmentSettings(child);
}
_ContainerElement.prototype._unRegisterChild = function(child) {
  child.horizontalAlignmentProperty.propertyChanging.$sub(child._stateBag.$index("__horizontalAlignmentEventReference__"/*_ContainerElement._horizontalReference*/));
  child.verticalAlignmentProperty.propertyChanging.$sub(child._stateBag.$index("__verticalAlignmentEventReference__"/*_ContainerElement._verticalReference*/));
  this._clearBindings(child);
  child._stateBag.remove("__horizontalAlignmentEventReference__"/*_ContainerElement._horizontalReference*/);
  child._stateBag.remove("__verticalAlignmentEventReference__"/*_ContainerElement._verticalReference*/);
}
_ContainerElement.prototype._onHorizontalAlignmentChanged = function(sender, args) {
  this._updateHorizontalAlignmentSettings(sender);
}
_ContainerElement.prototype.get$_onHorizontalAlignmentChanged = function() {
  return this._onHorizontalAlignmentChanged.bind(this);
}
_ContainerElement.prototype._onVerticalAlignmentChanged = function(sender, args) {
  this._updateVerticalAlignmentSettings(sender);
}
_ContainerElement.prototype.get$_onVerticalAlignmentChanged = function() {
  return this._onVerticalAlignmentChanged.bind(this);
}
_ContainerElement.prototype._clearBindings = function(child) {
  this._clearHorizontalBinding(child);
  this._clearVerticalBinding(child);
}
_ContainerElement.prototype._clearHorizontalBinding = function(child) {
  if (this._horizontalBinding == null) return;
  this._horizontalBinding.unregister();
  this._horizontalBinding = null;
  child._containerParent.updateLayout();
}
_ContainerElement.prototype._clearVerticalBinding = function(child) {
  if (this._verticalBinding == null) return;
  this._verticalBinding.unregister();
  this._verticalBinding = null;
  child._containerParent.updateLayout();
}
_ContainerElement.prototype._setHorizontalBinding = function(child) {
  if (this._horizontalBinding != null) $throw(const$83/*const FrameworkException("Horizontal binding already set in _ContainerElement.")*/);
  this._horizontalBinding = new _BindingImplementation(child._containerParent.actualWidthProperty, child.widthProperty, const$73/*BindingMode.OneWay*/, const$75/*const _DefaultConverter()*/);
}
_ContainerElement.prototype._setVerticalBinding = function(child) {
  if (this._verticalBinding != null) $throw(const$84/*const FrameworkException("Vertical binding already set in _ContainerElement.")*/);
  this._verticalBinding = new _BindingImplementation(child._containerParent.actualHeightProperty, child.heightProperty, const$73/*BindingMode.OneWay*/, const$75/*const _DefaultConverter()*/);
}
_ContainerElement.prototype._updateHorizontalAlignmentSettings = function(element) {
  if (this._horizontalBinding == null && $eq(element.get$horizontalAlignment(), const$53/*HorizontalAlignment.Stretch*/)) {
    this._setHorizontalBinding(element);
    return;
  }
  if (this._horizontalBinding != null && $ne(element.get$horizontalAlignment(), const$53/*HorizontalAlignment.Stretch*/)) {
    this._clearHorizontalBinding(element);
  }
}
_ContainerElement.prototype._updateVerticalAlignmentSettings = function(element) {
  if (this._verticalBinding == null && $eq(element.get$verticalAlignment(), const$63/*VerticalAlignment.Stretch*/)) {
    this._setVerticalBinding(element);
    return;
  }
  if (this._verticalBinding != null && $ne(element.get$verticalAlignment(), const$63/*VerticalAlignment.Stretch*/)) {
    this._clearVerticalBinding(element);
  }
}
_ContainerElement.prototype.get$_type = function() {
  return "ContainerElement";
}
// ********** Code for Border **************
$inherits(Border, _ContainerElement);
function Border() {
  var $this = this; // closure support
  this._previousWidth = -1
  this._previousHeight = -1
  // Initializers done
  _ContainerElement.call(this);
  _Dom.appendClass(this._component, "luca_ui_border");
  this.contentProperty = new FrameworkProperty(this, "content", (function (value) {
    if ($this._vc != null) {
      $this._vc.set$content(null);
      $this.contentProperty.previousValue.set$parent(null);
    }
    if (value != null) {
      if (value.get$parent() != null) $throw(const$79/*const FrameworkException("Element is already child of another element.")*/);
      value.set$parent($this);
      if ($this._vc == null) {
        $this._vc = new _BorderContainer();
        $this._vc._containerParent = $this;
        $this._component.get$nodes().add($this._vc._component);
        $this._registerChild($this._vc);
      }
      $this._vc.set$content(value);
      $this._vc.set$parent($this);
      $this.updateLayout();
    }
  })
  , null);
  this._stateBag.$setindex("CONTAINER_CONTEXT"/*FrameworkObject.CONTAINER_CONTEXT*/, this.contentProperty);
  this.backgroundProperty = new FrameworkProperty(this, "background", (function (value) {
    value.renderBrush($this._component);
  })
  );
  this.backgroundProperty.stringToValueConverter = const$370/*const StringToSolidColorBrushConverter()*/;
  this.paddingProperty = new FrameworkProperty(this, "padding", (function (value) {
    $this._component.get$style().set$padding(('' + value.top + 'px ' + value.right + 'px ' + value.bottom + 'px ' + value.left + 'px'));
  })
  , new Thickness(0));
  this.paddingProperty.stringToValueConverter = const$7/*const StringToThicknessConverter()*/;
  this.cornerRadiusProperty = new FrameworkProperty(this, "cornerRadius", (function (value) {
    if (value < 0) value = 0;
    $this._component.get$style().set$borderRadius(value.toString$0());
  })
  );
  this.borderColorProperty = new FrameworkProperty(this, "borderColor", (function (value) {
    $this._component.get$style().set$borderColor(value.get$color().toString$0());
  })
  , new SolidColorBrush(new Color(const$362/*Colors.White*/)));
  this.borderColorProperty.stringToValueConverter = const$370/*const StringToSolidColorBrushConverter()*/;
  this.borderThicknessProperty = new FrameworkProperty(this, "borderThickness", (function (value) {
    var color = $this.get$borderColor() != null ? $this.get$borderColor().color.toString() : new Color(const$362/*Colors.White*/).toString();
    $this._component.get$style().set$borderTop(('solid ' + value.get$top() + 'px ' + color));
    $this._component.get$style().set$borderRight(('solid ' + value.get$right() + 'px ' + color));
    $this._component.get$style().set$borderLeft(('solid ' + value.get$left() + 'px ' + color));
    $this._component.get$style().set$borderBottom(('solid ' + value.get$bottom() + 'px ' + color));
  })
  , new Thickness(0));
  this.borderThicknessProperty.stringToValueConverter = const$7/*const StringToThicknessConverter()*/;
}
Border.prototype.calculateWidth = function(value) {
  FrameworkElement.prototype.calculateWidth.call(this, value);
  if (value == "auto") return;
  setValue(this.actualWidthProperty, value - (this.get$margin().left + this.get$margin().right + this.get$borderThickness().left + this.get$borderThickness().right + this.get$padding().left + this.get$padding().right));
}
Border.prototype.calculateHeight = function(value) {
  FrameworkElement.prototype.calculateHeight.call(this, value);
  if (value == "auto") return;
  setValue(this.actualHeightProperty, value - (this.get$margin().top + this.get$margin().bottom + this.get$borderThickness().top + this.get$borderThickness().bottom + this.get$padding().top + this.get$padding().bottom));
}
Border.prototype.get$innerWidth = function() {
  return (this.get$margin() != null && this.get$padding() != null && this.get$borderThickness() != null) ? $sub(this._rawElement.get$clientWidth(), (this.get$margin().left + this.get$padding().left + this.get$borderThickness().left + this.get$margin().right + this.get$padding().right + this.get$borderThickness().right)) : 0;
}
Border.prototype.get$innerHeight = function() {
  return (this.get$margin() != null && this.get$padding() != null && this.get$borderThickness() != null) ? $sub(this._rawElement.get$clientHeight(), (this.get$margin().top + this.get$padding().top + this.get$borderThickness().top + this.get$margin().bottom + this.get$padding().bottom + this.get$borderThickness().bottom)) : 0;
}
Border.prototype.get$padding = function() {
  return getValue(this.paddingProperty);
}
Border.prototype.get$borderColor = function() {
  return getValue(this.borderColorProperty);
}
Border.prototype.get$borderThickness = function() {
  return getValue(this.borderThicknessProperty);
}
Border.prototype.get$content = function() {
  return getValue(this.contentProperty);
}
Border.prototype.set$content = function(value) {
  return setValue(this.contentProperty, value);
}
Border.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("div");
  this._component.get$style().set$overflow("hidden");
  this._component.get$style().set$display("inline-block");
  this._component.get$style().set$boxSizing("border-box");
}
Border.prototype.updateLayout = function() {
  if (this._vc == null) return;
  if ($eq(this._previousWidth, this.get$width()) && $eq(this._previousHeight, this.get$height())) return;
  this._unRegisterChild(this._vc);
  if ($eq(this.get$width(), "auto")) {
    this._vc.set$horizontalAlignment(const$55/*HorizontalAlignment.Left*/);
    this._vc.set$width("auto");
  }
  else {
    this._vc.set$horizontalAlignment(const$53/*HorizontalAlignment.Stretch*/);
  }
  if ($eq(this.get$height(), "auto")) {
    this._vc.set$verticalAlignment(const$65/*VerticalAlignment.Top*/);
    this._vc.set$height("auto");
  }
  else {
    this._vc.set$verticalAlignment(const$63/*VerticalAlignment.Stretch*/);
  }
  this._registerChild(this._vc);
  this._previousWidth = this.get$width();
  this._previousHeight = this.get$height();
}
Border.prototype.get$_type = function() {
  return "Border";
}
Border.prototype.updateLayout$0 = Border.prototype.updateLayout;
// ********** Code for Control **************
$inherits(Control, FrameworkElement);
function Control() {
  // Initializers done
  FrameworkElement.call(this);
}
Control.prototype.get$_type = function() {
  return "Control";
}
// ********** Code for Button **************
$inherits(Button, Control);
function Button() {
  var $this = this; // closure support
  // Initializers done
  Control.call(this);
  _Dom.appendClass(this._component, "luca_ui_button");
  this.contentProperty = new FrameworkProperty(this, "content", (function (value) {
    if (($this._content instanceof TextBlock) && (typeof(value) == 'string')) {
      $this._content.set$text(value);
      return;
    }
    if ((typeof(value) == 'string')) {
      var tempStr = value;
      value = new TextBlock();
      value.set$text(tempStr);
    }
    if ($this._content != null) {
      $this._content.get$_component().remove$0();
      $this._content.set$parent(null);
    }
    if (value != null) {
      $this._content = value;
      $this._content.set$parent($this);
      $this._component.get$nodes().add($this._content.get$_component());
    }
    else {
      $this._content = null;
    }
  })
  );
  this._stateBag.$setindex("CONTAINER_CONTEXT"/*FrameworkObject.CONTAINER_CONTEXT*/, this.contentProperty);
}
Button.prototype.get$content = function() {
  return getValue(this.contentProperty);
}
Button.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("button");
}
Button.prototype.get$_type = function() {
  return "Button";
}
// ********** Code for Panel **************
$inherits(Panel, _ContainerElement);
function Panel() {
  var $this = this; // closure support
  this.children = new ObservableList_FrameworkElement();
  // Initializers done
  _ContainerElement.call(this);
  _Dom.appendClass(this._component, "luca_ui_panel");
  this._stateBag.$setindex("CONTAINER_CONTEXT"/*FrameworkObject.CONTAINER_CONTEXT*/, this.children);
  this.backgroundProperty = new FrameworkProperty(this, "background", (function (value) {
    value.renderBrush($this._component);
  })
  );
  this.backgroundProperty.stringToValueConverter = const$370/*const StringToSolidColorBrushConverter()*/;
  this.children.listChanged.$add((function (_, args) {
    args.get$oldItems().forEach$1((function (item) {
      item.set$parent(null);
    })
    );
    args.get$newItems().forEach$1((function (item) {
      if (item.get$parent() != null) {
        $throw(const$79/*const FrameworkException("Element is already child of another element.")*/);
      }
      item.set$parent($this);
    })
    );
  })
  );
}
Panel.prototype.set$background = function(value) {
  return setValue(this.backgroundProperty, value);
}
Panel.prototype.get$_type = function() {
  return "Panel";
}
Panel.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("div");
  this._component.get$style().set$overflow("hidden");
  this._component.get$style().set$display("inline-block");
}
// ********** Code for LayoutCanvas **************
$inherits(LayoutCanvas, Panel);
function LayoutCanvas() {
  // Initializers done
  Panel.call(this);
  _Dom.appendClass(this._component, "luca_ui_layoutcanvas");
  this.children.listChanged.$add(this.get$_onListChanging());
}
LayoutCanvas.prototype._onListChanging = function(_, args) {
  var $this = this; // closure support
  args.oldItems.forEach((function (element) {
    element.set$margin(element.get$_stateBag().$index("margin"));
    element.get$_stateBag().remove$1("margin");
    element.get$_component().get$style().set$position("inherit");
    $sub(element.get$attachedPropertyChanged(), $this.get$_onAttachedPropertyChanging());
  })
  );
  args.newItems.forEach((function (element) {
    element.get$_component().get$style().set$position("absolute");
    var l = LayoutCanvas.getLeft(element);
    var t = LayoutCanvas.getTop(element);
    element.get$_stateBag().$setindex("margin", element.get$margin());
    element.set$margin(new Thickness.specified$ctor(t, 0, 0, l));
    $this._component.get$nodes().add(element.get$_component());
    $add(element.get$attachedPropertyChanged(), $this.get$_onAttachedPropertyChanging());
  })
  );
}
LayoutCanvas.prototype.get$_onListChanging = function() {
  return this._onListChanging.bind(this);
}
LayoutCanvas.prototype._onAttachedPropertyChanging = function(sender, args) {
  var f = args.property.propertyChangedCallback;
  f.call$2(sender, args.value);
}
LayoutCanvas.prototype.get$_onAttachedPropertyChanging = function() {
  return this._onAttachedPropertyChanging.bind(this);
}
LayoutCanvas.setTop = function(element, value) {
  if (element == null) return;
  if (value < 0) value = 0;
  if ($globals.LayoutCanvas_topProperty == null) $globals.LayoutCanvas_topProperty = new AttachedFrameworkProperty("top", (function (e, v) {
    element.set$margin(new Thickness.specified$ctor(v, 0, 0, LayoutCanvas.getLeft(e)));
  })
  );
  FrameworkObject.setAttachedValue(element, $globals.LayoutCanvas_topProperty, value);
}
LayoutCanvas.getTop = function(element) {
  if (element == null) return 0;
  var value = FrameworkObject.getAttachedValue(element, $globals.LayoutCanvas_topProperty);
  if ($globals.LayoutCanvas_topProperty == null || value == null) LayoutCanvas.setTop(element, 0);
  return FrameworkObject.getAttachedValue(element, $globals.LayoutCanvas_topProperty);
}
LayoutCanvas.setLeft = function(element, value) {
  if (element == null) return;
  if (value < 0) value = 0;
  if ($globals.LayoutCanvas_leftProperty == null) $globals.LayoutCanvas_leftProperty = new AttachedFrameworkProperty("left", (function (e, v) {
    element.set$margin(new Thickness.specified$ctor(LayoutCanvas.getTop(e), 0, 0, v));
  })
  );
  FrameworkObject.setAttachedValue(element, $globals.LayoutCanvas_leftProperty, value);
}
LayoutCanvas.getLeft = function(element) {
  if (element == null) return 0;
  var value = FrameworkObject.getAttachedValue(element, $globals.LayoutCanvas_leftProperty);
  if ($globals.LayoutCanvas_leftProperty == null || value == null) LayoutCanvas.setLeft(element, 0);
  return FrameworkObject.getAttachedValue(element, $globals.LayoutCanvas_leftProperty);
}
LayoutCanvas.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("div");
  this._component.get$style().set$overflow("hidden");
}
LayoutCanvas.prototype.updateLayout = function() {

}
LayoutCanvas.prototype.get$_type = function() {
  return "LayoutCanvas";
}
LayoutCanvas.prototype.updateLayout$0 = LayoutCanvas.prototype.updateLayout;
// ********** Code for _FrameworkEventImplementation **************
$inherits(_FrameworkEventImplementation, LucaObject);
function _FrameworkEventImplementation() {
  this._handlers = new Array();
  // Initializers done
  LucaObject.call(this);
}
_FrameworkEventImplementation.prototype.get$hasHandlers = function() {
  return !this._handlers.isEmpty();
}
_FrameworkEventImplementation.prototype.register = function(handler) {
  var hr = new EventHandlerReference(to$call$2(handler));
  this._handlers.add(hr);
  return hr;
}
_FrameworkEventImplementation.prototype.unregister = function(handlerReference) {
  var i = this._handlers.indexOf(handlerReference, 0);
  if (i < 0) return;
  this._handlers.removeRange(i, 1);
}
_FrameworkEventImplementation.prototype.$add = function(handler) {
  return this.register(handler);
}
_FrameworkEventImplementation.prototype.$sub = function(handlerReference) {
  return this.unregister(handlerReference);
}
_FrameworkEventImplementation.prototype.invoke = function(sender, args) {
  return this._handlers.forEach((function (handlerReference) {
    return handlerReference.handler$2(sender, args);
  })
  );
}
// ********** Code for _FrameworkEventImplementation_AttachedPropertyChangedEventArgs **************
$inherits(_FrameworkEventImplementation_AttachedPropertyChangedEventArgs, _FrameworkEventImplementation);
function _FrameworkEventImplementation_AttachedPropertyChangedEventArgs() {}
// ********** Code for _FrameworkEventImplementation_EventArgs **************
$inherits(_FrameworkEventImplementation_EventArgs, _FrameworkEventImplementation);
function _FrameworkEventImplementation_EventArgs() {}
// ********** Code for _FrameworkEventImplementation_ListChangedEventArgs_ColumnDefinition **************
$inherits(_FrameworkEventImplementation_ListChangedEventArgs_ColumnDefinition, _FrameworkEventImplementation);
function _FrameworkEventImplementation_ListChangedEventArgs_ColumnDefinition() {}
// ********** Code for _FrameworkEventImplementation_ListChangedEventArgs_FrameworkElement **************
$inherits(_FrameworkEventImplementation_ListChangedEventArgs_FrameworkElement, _FrameworkEventImplementation);
function _FrameworkEventImplementation_ListChangedEventArgs_FrameworkElement() {}
// ********** Code for _FrameworkEventImplementation_ListChangedEventArgs_RowDefinition **************
$inherits(_FrameworkEventImplementation_ListChangedEventArgs_RowDefinition, _FrameworkEventImplementation);
function _FrameworkEventImplementation_ListChangedEventArgs_RowDefinition() {}
// ********** Code for _FrameworkEventImplementation_ListChangedEventArgs_T **************
$inherits(_FrameworkEventImplementation_ListChangedEventArgs_T, _FrameworkEventImplementation);
function _FrameworkEventImplementation_ListChangedEventArgs_T() {}
// ********** Code for _FrameworkEventImplementation_MouseEventArgs **************
$inherits(_FrameworkEventImplementation_MouseEventArgs, _FrameworkEventImplementation);
function _FrameworkEventImplementation_MouseEventArgs() {}
// ********** Code for _FrameworkEventImplementation_PropertyChangingEventArgs **************
$inherits(_FrameworkEventImplementation_PropertyChangingEventArgs, _FrameworkEventImplementation);
function _FrameworkEventImplementation_PropertyChangingEventArgs() {}
// ********** Code for _FrameworkEventImplementation_RoutedEventArgs **************
$inherits(_FrameworkEventImplementation_RoutedEventArgs, _FrameworkEventImplementation);
function _FrameworkEventImplementation_RoutedEventArgs() {}
// ********** Code for _FrameworkEventImplementation_TextChangedEventArgs **************
$inherits(_FrameworkEventImplementation_TextChangedEventArgs, _FrameworkEventImplementation);
function _FrameworkEventImplementation_TextChangedEventArgs() {}
// ********** Code for FrameworkException **************
function FrameworkException(message) {
  this.message = message;
  // Initializers done
}
FrameworkException.prototype.is$Exception = function(){return true};
// ********** Code for Grid **************
$inherits(Grid, Panel);
function Grid() {
  var $this = this; // closure support
  this._internalChildren = new Array();
  // Initializers done
  Panel.call(this);
  _Dom.appendClass(this._component, "luca_ui_grid");
  this.columnDefinitionsProperty = new FrameworkProperty(this, "columnDefinitions", (function (list) {
    $this._updateColumnLayout($this.get$actualWidth());
  })
  , new ObservableList_ColumnDefinition());
  this.rowDefinitionsProperty = new FrameworkProperty(this, "rowDefinitions", (function (list) {
    $this._updateRowLayout($this.get$actualHeight());
  })
  , new ObservableList_RowDefinition());
  this.children.listChanged.$add(this.get$_onChildrenChanging());
  this.get$columnDefinitions().listChanged.$add((function (_, __) {
    return $this._updateColumnLayout($this.get$actualWidth());
  })
  );
  this.get$rowDefinitions().listChanged.$add((function (_, __) {
    return $this._updateRowLayout($this.get$actualHeight());
  })
  );
  this.widthProperty.propertyChanging.$add((function (_, __) {
    return $this._updateColumnLayout($this.get$actualWidth());
  })
  );
  this.heightProperty.propertyChanging.$add((function (_, __) {
    $this._updateRowLayout($this.get$actualHeight());
  })
  );
}
Grid.prototype.get$columnDefinitions = function() {
  return getValue(this.columnDefinitionsProperty);
}
Grid.prototype.get$rowDefinitions = function() {
  return getValue(this.rowDefinitionsProperty);
}
Grid.prototype._onChildrenChanging = function(_, args) {
  var $this = this; // closure support
  args.oldItems.forEach((function (item) {
    var result = $this._internalChildren.filter((function (gc) {
      return gc.get$content() === item;
    })
    );
    if ($ne(result.get$length(), 1)) $throw(new FrameworkException("Deleted element not found in internal Grid collection."));
    result.$index(0).removeChild$1(item);
    result.$index(0).get$_component().remove$0();
    item.set$parent(null);
  })
  );
  args.newItems.forEach((function (item) {
    var newGC = new _GridCell();
    newGC.set$content(item);
    newGC._component.get$style().set$position("absolute");
    $this._internalChildren.add(newGC);
    $this._component.get$nodes().add(newGC._component);
  })
  );
  this.updateLayout();
}
Grid.prototype.get$_onChildrenChanging = function() {
  return this._onChildrenChanging.bind(this);
}
Grid.prototype._totalLengthOf = function(definitions) {
  var total = 0;
  definitions.forEach((function (item) {
    total = total + item.get$_adjustedLength();
  })
  );
  return total;
}
Grid.prototype.updateLayout = function() {
  this._updateRowLayout(this.get$actualHeight());
  this._updateColumnLayout(this.get$actualWidth());
}
Grid.prototype._updateColumnLayout = function(gridMeasurement) {
  var $this = this; // closure support
  if (!this._isLoaded) return;
  var gridWidth = gridMeasurement;
  if (this.get$columnDefinitions().length == 0) {
    this._internalChildren.forEach((function (child) {
      child.set$margin(new Thickness.specified$ctor(child.get$margin().get$top(), 0, 0, 0));
      child.set$width(gridWidth);
    })
    );
    return;
  }
  var totalPixelValue = 0;
  var totalStarValue = 0;
  var lastStar = null;
  this.get$columnDefinitions().forEach((function (c) {
    if ($eq(c.get$width().get$gridUnitType(), const$377/*GridUnitType.pixel*/)) {
      c.set$_adjustedLength(c.get$width().get$value());
      totalPixelValue += c.get$width().get$value();
    }
    else if ($eq(c.get$width().get$gridUnitType(), const$379/*GridUnitType.star*/)) {
      totalStarValue += c.get$width().get$value();
      lastStar = c;
    }
    else if ($eq(c.get$width().get$gridUnitType(), const$381/*GridUnitType.auto*/)) {
      var widestAuto = 0;
      $this._internalChildren.filter((function (child) {
        return Grid.getColumn(child.get$content()) == $this.get$columnDefinitions().indexOf(c, 0) && Grid.getColumnSpan(child.get$content()) < 2;
      })
      ).forEach$1((function (child) {
        var childWidth = child._rawElement.get$clientWidth();
        if (childWidth > widestAuto) widestAuto = childWidth;
      })
      );
      c.set$_adjustedLength(widestAuto);
      totalPixelValue += widestAuto;
    }
  })
  );
  var availColWidth = gridWidth - totalPixelValue;
  var ii = 0;
  var totalStarLength = 0;
  this.get$columnDefinitions().forEach((function (c) {
    if ($eq(c.get$width().get$gridUnitType(), const$379/*GridUnitType.star*/)) {
      if (c === lastStar) {
        c.set$_adjustedLength((availColWidth - totalStarLength));
      }
      else {
        c.set$_adjustedLength(((availColWidth * (c.get$width().get$value() / totalStarValue)).round()));
        totalStarLength += c.get$_adjustedLength();
      }
    }
    var id = ii - 1;
    c._adjustedOffset = ii == 0 ? 0 : $this.get$columnDefinitions()[id]._adjustedOffset + $this.get$columnDefinitions()[id].get$_adjustedLength();
    ii++;
  })
  );
  this._internalChildren.forEach((function (child) {
    var colIndex = Grid.getColumn(child.get$content());
    var childColumnSpan = Grid.getColumnSpan(child.get$content());
    child.set$margin(new Thickness.specified$ctor(child.get$margin().get$top(), 0, 0, $this.get$columnDefinitions()[colIndex]._adjustedOffset));
    if (childColumnSpan > 1) {
      if (childColumnSpan > $this.get$columnDefinitions().length - colIndex) childColumnSpan = $this.get$columnDefinitions().length - colIndex;
      child.set$width($this._totalLengthOf($this.get$columnDefinitions().getRange(colIndex, childColumnSpan)));
    }
    else {
      child.set$width($this.get$columnDefinitions()[colIndex].get$_adjustedLength());
    }
    child.updateLayout$0();
  })
  );
}
Grid.prototype._updateRowLayout = function(gridHeight) {
  var $this = this; // closure support
  if (!this._isLoaded) return;
  if (this.get$rowDefinitions().length == 0) {
    this._internalChildren.forEach((function (child) {
      child.set$margin(new Thickness.specified$ctor(0, 0, 0, child.get$margin().get$left()));
      child.set$height(gridHeight);
    })
    );
    return;
  }
  var totalPixelValue = 0;
  var totalStarValue = 0;
  var lastStar = null;
  this.get$rowDefinitions().forEach((function (c) {
    if ($eq(c.get$height().get$gridUnitType(), const$377/*GridUnitType.pixel*/)) {
      c.set$_adjustedLength(c.get$height().get$value());
      totalPixelValue += c.get$height().get$value();
    }
    else if ($eq(c.get$height().get$gridUnitType(), const$379/*GridUnitType.star*/)) {
      totalStarValue += c.get$height().get$value();
      lastStar = c;
    }
    else if ($eq(c.get$height().get$gridUnitType(), const$381/*GridUnitType.auto*/)) {
      var widestAuto = 0;
      $this._internalChildren.filter((function (child) {
        return Grid.getRow(child.get$content()) == $this.get$rowDefinitions().indexOf(c, 0) && Grid.getRowSpan(child.get$content()) < 2;
      })
      ).forEach$1((function (child) {
        var childHeight = child._getHeight();
        if (childHeight > widestAuto) widestAuto = childHeight;
      })
      );
      c.set$_adjustedLength(widestAuto);
      totalPixelValue += widestAuto;
    }
  })
  );
  var availRowHeight = gridHeight - totalPixelValue;
  var ii = 0;
  var totalStarLength = 0;
  this.get$rowDefinitions().forEach((function (c) {
    if ($eq(c.get$height().get$gridUnitType(), const$379/*GridUnitType.star*/)) {
      if (c === lastStar) {
        c.set$_adjustedLength((availRowHeight - totalStarLength));
      }
      else {
        c.set$_adjustedLength(((availRowHeight * (c.get$height().get$value() / totalStarValue)).round()));
        totalStarLength += c.get$_adjustedLength();
      }
    }
    var id = ii - 1;
    c._adjustedOffset = ii == 0 ? 0 : ($this.get$rowDefinitions()[id]._adjustedOffset + $this.get$rowDefinitions()[id].get$_adjustedLength());
    ii++;
  })
  );
  this._internalChildren.forEach((function (child) {
    var rowIndex = Grid.getRow(child.get$content());
    var childRowSpan = Grid.getRowSpan(child.get$content());
    child.set$margin(new Thickness.specified$ctor($this.get$rowDefinitions()[rowIndex]._adjustedOffset, 0, 0, child.get$margin().get$left()));
    if (childRowSpan > 1) {
      if (childRowSpan > $this.get$rowDefinitions().length - rowIndex) childRowSpan = $this.get$rowDefinitions().length - rowIndex;
      child.set$height($this._totalLengthOf($this.get$rowDefinitions().getRange(rowIndex, childRowSpan)));
    }
    else {
      child.set$height($this.get$rowDefinitions()[rowIndex].get$_adjustedLength());
    }
    child.updateLayout$0();
  })
  );
}
Grid.setColumn = function(element, column) {
  if (element == null) return;
  if (column < 0) column = 0;
  if ($globals.Grid_columnProperty == null) {
    $globals.Grid_columnProperty = new AttachedFrameworkProperty("column", (function (e, value) {

    })
    );
  }
  FrameworkObject.setAttachedValue(element, $globals.Grid_columnProperty, column);
}
Grid.getColumn = function(element) {
  if (element == null) return 0;
  var value = FrameworkObject.getAttachedValue(element, $globals.Grid_columnProperty);
  if ($globals.Grid_columnProperty == null || value == null) Grid.setColumn(element, 0);
  return FrameworkObject.getAttachedValue(element, $globals.Grid_columnProperty);
}
Grid.setRow = function(element, row) {
  if (element == null) return;
  if (row < 0) row = 0;
  if ($globals.Grid_rowProperty == null) {
    $globals.Grid_rowProperty = new AttachedFrameworkProperty("row", (function (e, value) {

    })
    );
  }
  FrameworkObject.setAttachedValue(element, $globals.Grid_rowProperty, row);
}
Grid.getRow = function(element) {
  if (element == null) return 0;
  var value = FrameworkObject.getAttachedValue(element, $globals.Grid_rowProperty);
  if ($globals.Grid_rowProperty == null || value == null) Grid.setRow(element, 0);
  return FrameworkObject.getAttachedValue(element, $globals.Grid_rowProperty);
}
Grid.setColumnSpan = function(element, columnSpan) {
  if (element == null) return;
  if (columnSpan < 0) columnSpan = 0;
  if ($globals.Grid_columnSpanProperty == null) {
    $globals.Grid_columnSpanProperty = new AttachedFrameworkProperty("columnSpan", (function (e, value) {

    })
    );
  }
  FrameworkObject.setAttachedValue(element, $globals.Grid_columnSpanProperty, columnSpan);
}
Grid.getColumnSpan = function(element) {
  if (element == null) return 0;
  var value = FrameworkObject.getAttachedValue(element, $globals.Grid_columnSpanProperty);
  if ($globals.Grid_columnSpanProperty == null || value == null) Grid.setColumnSpan(element, 0);
  return FrameworkObject.getAttachedValue(element, $globals.Grid_columnSpanProperty);
}
Grid.setRowSpan = function(element, rowSpan) {
  if (element == null) return;
  if (rowSpan < 0) rowSpan = 0;
  if ($globals.Grid_rowSpanProperty == null) {
    $globals.Grid_rowSpanProperty = new AttachedFrameworkProperty("rowSpan", (function (e, value) {

    })
    );
  }
  FrameworkObject.setAttachedValue(element, $globals.Grid_rowSpanProperty, rowSpan);
}
Grid.getRowSpan = function(element) {
  if (element == null) return 0;
  var value = FrameworkObject.getAttachedValue(element, $globals.Grid_rowSpanProperty);
  if ($globals.Grid_rowSpanProperty == null || value == null) Grid.setRowSpan(element, 0);
  return FrameworkObject.getAttachedValue(element, $globals.Grid_rowSpanProperty);
}
Grid.prototype.get$_type = function() {
  return "Grid";
}
Grid.prototype.updateLayout$0 = Grid.prototype.updateLayout;
// ********** Code for StackPanel **************
$inherits(StackPanel, Panel);
function StackPanel() {
  var $this = this; // closure support
  // Initializers done
  Panel.call(this);
  _Dom.appendClass(this._component, "luca_ui_stackpanel");
  this.orientationProperty = new FrameworkProperty(this, "orientation", (function (value) {
    LucaSystem.setFlexBoxOrientation($this, value);
  })
  , const$374/*Orientation.vertical*/);
  this.orientationProperty.stringToValueConverter = new StringToOrientationConverter();
  this.children.listChanged.$add(this.get$_onListChanging());
}
StackPanel.prototype._onListChanging = function(_, args) {
  var $this = this; // closure support
  if (!args.oldItems.isEmpty()) {
    args.oldItems.forEach((function (element) {
      element._component.remove();
      element._containerParent = null;
    })
    );
  }
  if (!args.newItems.isEmpty()) {
    args.newItems.forEach((function (element) {
      $this._component.get$nodes().add(element._component);
      element._containerParent = $this;
    })
    );
  }
}
StackPanel.prototype.get$_onListChanging = function() {
  return this._onListChanging.bind(this);
}
StackPanel.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("div");
  this._component.get$style().set$overflow("hidden");
}
StackPanel.prototype.updateLayout = function() {

}
StackPanel.prototype.get$_type = function() {
  return "StackPanel";
}
StackPanel.prototype.updateLayout$0 = StackPanel.prototype.updateLayout;
// ********** Code for TextBlock **************
$inherits(TextBlock, FrameworkElement);
function TextBlock() {
  // Initializers done
  FrameworkElement.call(this);
  _Dom.appendClass(this._component, "luca_ui_textblock");
  this._initProperties();
  this._stateBag.$setindex("CONTAINER_CONTEXT"/*FrameworkObject.CONTAINER_CONTEXT*/, this.textProperty);
}
TextBlock.prototype._initProperties = function() {
  var $this = this; // closure support
  this.backgroundProperty = new FrameworkProperty(this, "background", (function (value) {
    value.renderBrush($this._component);
  })
  );
  this.backgroundProperty.stringToValueConverter = const$370/*const StringToSolidColorBrushConverter()*/;
  this.foregroundProperty = new FrameworkProperty(this, "foreground", (function (value) {
    $this._component.get$style().set$color(value.get$color().toString$0());
  })
  , new SolidColorBrush(new Color(const$104/*Colors.Black*/)));
  this.foregroundProperty.stringToValueConverter = const$370/*const StringToSolidColorBrushConverter()*/;
  this.textProperty = new FrameworkProperty(this, "text", (function (value) {
    $this._component.set$text(value.toString());
  })
  );
  this.fontSizeProperty = new FrameworkProperty(this, "fontSize", (function (value) {
    $this._component.get$style().set$fontSize(('' + value.toString$0() + 'px'));
  })
  );
  this.fontFamilyProperty = new FrameworkProperty(this, "fontFamily", (function (value) {
    $this._component.get$style().set$fontFamily(value.toString$0());
  })
  );
}
TextBlock.prototype.set$fontSize = function(value) {
  return setValue(this.fontSizeProperty, value);
}
TextBlock.prototype.set$text = function(value) {
  return setValue(this.textProperty, value);
}
TextBlock.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("p");
}
TextBlock.prototype.updateLayout = function() {

}
TextBlock.prototype.get$_type = function() {
  return "TextBlock";
}
TextBlock.prototype.updateLayout$0 = TextBlock.prototype.updateLayout;
// ********** Code for _VirtualContainer **************
$inherits(_VirtualContainer, _ContainerElement);
function _VirtualContainer() {
  // Initializers done
  _ContainerElement.call(this);
  _Dom.appendClass(this._component, "luca_ui_virtualcontainer");
}
_VirtualContainer.prototype.get$content = function() {
  return this._content;
}
_VirtualContainer.prototype.set$content = function(element) {
  if (this._content != null) {
    this._content._component.remove();
    this._content._containerParent = null;
    this._unRegisterChild(this._content);
  }
  if (element != null) {
    this._content = element;
    this._content._containerParent = this;
    this._registerChild(this._content);
    this._component.get$nodes().add(this.get$content()._component);
    this.updateLayout();
  }
  else {
    this._content = null;
  }
}
_VirtualContainer.prototype.get$innerWidth = function() {
  return this.get$actualWidth();
}
_VirtualContainer.prototype.get$innerHeight = function() {
  return this.get$actualHeight();
}
_VirtualContainer.prototype.calculateWidth = function(value) {
  if (value == "auto") {
    this._component.get$style().set$width("auto");
    setValue(this.actualWidthProperty, this.get$innerWidth());
    return;
  }
  if (this.get$minWidth() != null && value < this.get$minWidth()) {
    this.set$width(this.get$minWidth());
  }
  if (this.get$maxWidth() != null && value > this.get$maxWidth()) {
    this.set$width(this.get$maxWidth());
  }
  this._component.get$style().set$width(('' + value.toString() + 'px'));
  setValue(this.actualWidthProperty, value);
}
_VirtualContainer.prototype.calculateHeight = function(value) {
  if (value == "auto") {
    this._component.get$style().set$height("auto");
    setValue(this.actualHeightProperty, this.get$innerHeight());
    return;
  }
  if (this.get$minHeight() != null && value < this.get$minHeight()) {
    this.set$height(this.get$minHeight());
  }
  if (this.get$maxHeight() != null && value > this.get$maxHeight()) {
    this.set$height(this.get$maxHeight());
  }
  this._component.get$style().set$height(('' + value.toString() + 'px'));
  setValue(this.actualHeightProperty, value);
}
_VirtualContainer.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("div");
  this._component.get$style().set$overflow("hidden");
}
_VirtualContainer.prototype.updateLayout = function() {

}
_VirtualContainer.prototype.get$_type = function() {
  return "VirtualContainer";
}
_VirtualContainer.prototype.updateLayout$0 = _VirtualContainer.prototype.updateLayout;
// ********** Code for _GridCell **************
$inherits(_GridCell, _VirtualContainer);
function _GridCell() {
  // Initializers done
  _VirtualContainer.call(this);
  _Dom.appendClass(this._component, "luca_ui_gridcell");
}
_GridCell.prototype._getHeight = function() {
  if (this.get$content() == null) return 0;
  var h = this._rawElement.getBoundingClientRect$0().get$height();
  if ($ne(this.get$content().get$verticalAlignment(), const$63/*VerticalAlignment.Stretch*/)) return h;
  this._unRegisterChild(this.get$content());
  this.get$content().set$height("auto");
  this.get$content().set$width("auto");
  this.get$content().updateLayout();
  h = this._rawElement.get$clientHeight();
  this._registerChild(this.get$content());
  this.get$content().updateLayout();
  return h;
}
_GridCell.prototype.CreateElement = function() {
  _VirtualContainer.prototype.CreateElement.call(this);
  this._component.get$style().set$display("table-cell");
}
_GridCell.prototype.updateLayout = function() {
  if (this.get$content() == null) return;
  LucaSystem.setHorizontalFlexBoxAlignment(this, this.get$content().get$horizontalAlignment());
  LucaSystem.setVerticalFlexBoxAlignment(this, this.get$content().get$verticalAlignment());
}
_GridCell.prototype.get$_type = function() {
  return "GridCell";
}
_GridCell.prototype.set$parent = function(value) {
  if (!((value instanceof Grid))) $throw(const$384/*const FrameworkException(parentErrorMessage)*/);
  this._parent = value;
}
_GridCell.prototype.updateLayout$0 = _GridCell.prototype.updateLayout;
// ********** Code for _ViewFactory **************
function _ViewFactory(_rootElement) {
  this._rootElement = _rootElement;
  // Initializers done
}
_ViewFactory.prototype.get$rootVisual = function() {
  return this._rootElement;
}
// ********** Code for TextBox **************
$inherits(TextBox, FrameworkElement);
function TextBox() {
  this.textChanged = new _FrameworkEventImplementation();
  // Initializers done
  FrameworkElement.call(this);
  _Dom.appendClass(this._component, "luca_ui_textbox");
  this._initProperties();
  this._stateBag.$setindex("CONTAINER_CONTEXT"/*FrameworkObject.CONTAINER_CONTEXT*/, this.textProperty);
  this._initEvents();
}
TextBox.prototype._initProperties = function() {
  var $this = this; // closure support
  this.placeholderProperty = new FrameworkProperty(this, "placeholder", (function (value) {
    $this._component.get$attributes().$setindex("placeholder", value);
  })
  );
  this.textProperty = new FrameworkProperty(this, "text", (function (value) {

  })
  , "");
  this.inputTypeProperty = new FrameworkProperty(this, "inputType", (function (value) {
    if (InputTypes._isValidInputType(value)) {
      $this._component.get$attributes().$setindex("type", value);
    }
    else {
      $throw(new FrameworkException(("Invalid input '" + value + "' type passed to TextBox.inputType. Use InputTypes.{type} for safe assignment.")));
    }
  })
  , "text"/*InputTypes.text*/);
}
TextBox.prototype._initEvents = function() {
  var $this = this; // closure support
  this._component.get$on().get$keyUp().add$1((function (e) {
    if ($this.get$text() == $this._component.get$value()) return;
    var oldValue = $this.get$text();
    $this.set$text($this._component.get$value());
    if (!$this.textChanged.get$hasHandlers()) return;
    $this.textChanged.invoke($this, new TextChangedEventArgs.with$ctor(oldValue, $this.get$text()));
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
  this._component.get$on().get$change().add$1((function (e) {
    if ($this.get$text() == $this._component.get$value()) return;
    var oldValue = $this.get$text();
    $this.set$text($this._component.get$value());
    if (!$this.textChanged.get$hasHandlers()) return;
    $this.textChanged.invoke($this, new TextChangedEventArgs.with$ctor(oldValue, $this.get$text()));
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
}
TextBox.prototype.get$text = function() {
  return getValue(this.textProperty);
}
TextBox.prototype.set$text = function(value) {
  return setValue(this.textProperty, value);
}
TextBox.prototype.set$placeholder = function(value) {
  return setValue(this.placeholderProperty, value);
}
TextBox.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("input");
  this._component.get$attributes().$setindex("type", "text");
}
TextBox.prototype.get$_type = function() {
  return "TextBox";
}
// ********** Code for InputTypes **************
function InputTypes() {}
InputTypes._isValidInputType = function(candidate) {
  return const$397/*InputTypes._validInputTypes*/.indexOf(candidate, 0) > -1;
}
// ********** Code for TextChangedEventArgs **************
$inherits(TextChangedEventArgs, EventArgs);
function TextChangedEventArgs() {}
TextChangedEventArgs.with$ctor = function(oldText, newText) {
  this.oldText = oldText;
  this.newText = newText;
  // Initializers done
  EventArgs.call(this);
}
TextChangedEventArgs.with$ctor.prototype = TextChangedEventArgs.prototype;
// ********** Code for RoutedEventArgs **************
$inherits(RoutedEventArgs, EventArgs);
function RoutedEventArgs() {
  this.cancelBubble = false
  // Initializers done
  EventArgs.call(this);
}
RoutedEventArgs.prototype.get$cancelBubble = function() { return this.cancelBubble; };
RoutedEventArgs.prototype.set$cancelBubble = function(value) { return this.cancelBubble = value; };
// ********** Code for MouseEventArgs **************
$inherits(MouseEventArgs, RoutedEventArgs);
function MouseEventArgs(mouseX, mouseY, windowX, windowY) {
  this.mouseX = mouseX;
  this.mouseY = mouseY;
  this.windowX = windowX;
  this.windowY = windowY;
  // Initializers done
  RoutedEventArgs.call(this);
}
// ********** Code for RadioButton **************
$inherits(RadioButton, FrameworkElement);
function RadioButton() {
  this.selectionChanged = new _FrameworkEventImplementation();
  // Initializers done
  FrameworkElement.call(this);
  _Dom.appendClass(this._component, "luca_ui_radiobutton");
  this._initProperties();
  this._initEvents();
}
RadioButton.prototype._initProperties = function() {
  var $this = this; // closure support
  this.valueProperty = new FrameworkProperty(this, "value", (function (v) {
    $this._component.get$attributes().$setindex("value", v);
  })
  );
  this.groupNameProperty = new FrameworkProperty(this, "groupName", (function (v) {
    $this._component.get$attributes().$setindex("name", v);
  })
  , "default");
}
RadioButton.prototype._initEvents = function() {
  var $this = this; // closure support
  this.click.$add((function (_, __) {
    $this.selectionChanged.invoke($this, new EventArgs());
  })
  );
}
RadioButton.prototype.get$value = function() {
  return getValue(this.valueProperty);
}
RadioButton.prototype.set$value = function(v) {
  return setValue(this.valueProperty, v);
}
RadioButton.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("input");
  this._component.get$attributes().$setindex("type", "radio");
}
RadioButton.prototype.get$_type = function() {
  return "RadioButton";
}
// ********** Code for CheckBox **************
$inherits(CheckBox, FrameworkElement);
function CheckBox() {
  this.selectionChanged = new _FrameworkEventImplementation();
  // Initializers done
  FrameworkElement.call(this);
  _Dom.appendClass(this._component, "luca_ui_checkbox");
  this._initProperties();
  this._initEvents();
}
CheckBox.prototype._initProperties = function() {
  var $this = this; // closure support
  this.valueProperty = new FrameworkProperty(this, "value", (function (v) {
    $this._component.get$attributes().$setindex("value", v);
  })
  );
  this.groupNameProperty = new FrameworkProperty(this, "groupName", (function (v) {
    $this._component.get$attributes().$setindex("name", v);
  })
  , "default");
}
CheckBox.prototype._initEvents = function() {
  var $this = this; // closure support
  this.click.$add((function (_, __) {
    $this.selectionChanged.invoke($this, new EventArgs());
  })
  );
}
CheckBox.prototype.get$value = function() {
  return getValue(this.valueProperty);
}
CheckBox.prototype.set$value = function(v) {
  return setValue(this.valueProperty, v);
}
CheckBox.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("input");
  this._component.get$attributes().$setindex("type", "checkbox");
}
CheckBox.prototype.get$_type = function() {
  return "CheckBox";
}
// ********** Code for PropertyChangingEventArgs **************
$inherits(PropertyChangingEventArgs, EventArgs);
function PropertyChangingEventArgs(oldValue, newValue) {
  this.oldValue = oldValue;
  this.newValue = newValue;
  // Initializers done
  EventArgs.call(this);
}
// ********** Code for GridLayoutDefinition **************
$inherits(GridLayoutDefinition, LucaObject);
function GridLayoutDefinition() {
  this._adjustedLengthInternal = 0
  this._adjustedOffset = 0
  this.maxLength = 32767
  this.minLength = 0
  // Initializers done
  LucaObject.call(this);
}
GridLayoutDefinition.prototype.get$_adjustedLength = function() {
  return this._adjustedLengthInternal;
}
GridLayoutDefinition.prototype.set$_adjustedLength = function(value) {
  if (value < this.minLength) value = this.minLength;
  if (value > this.maxLength) value = this.maxLength;
  this._adjustedLengthInternal = value;
}
// ********** Code for RowDefinition **************
$inherits(RowDefinition, GridLayoutDefinition);
function RowDefinition() {}
RowDefinition.with$ctor = function(value) {
  this._rowDefinitionChanged = new _FrameworkEventImplementation();
  // Initializers done
  GridLayoutDefinition.call(this);
  this.set$height(value);
}
RowDefinition.with$ctor.prototype = RowDefinition.prototype;
RowDefinition.prototype.get$height = function() {
  return this._value;
}
RowDefinition.prototype.set$height = function(value) {
  if (value.get$value() < this.minLength) value.set$value(this.minLength);
  if (value.get$value() > this.maxLength) value.set$value(this.maxLength);
  this._value = value;
  this._rowDefinitionChanged.invoke(this, new EventArgs());
}
// ********** Code for GridLength **************
$inherits(GridLength, LucaObject);
function GridLength() {}
GridLength.star$ctor = function(v) {
  // Initializers done
  LucaObject.call(this);
  this._initGridUnitTypeProperties();
  this.set$gridUnitType(const$379/*GridUnitType.star*/);
  this.set$value(v);
}
GridLength.star$ctor.prototype = GridLength.prototype;
GridLength.auto$ctor = function() {
  // Initializers done
  LucaObject.call(this);
  this._initGridUnitTypeProperties();
}
GridLength.auto$ctor.prototype = GridLength.prototype;
GridLength.prototype.get$gridUnitType = function() {
  return getValue(this.gridUnitTypeProperty);
}
GridLength.prototype.set$gridUnitType = function(v) {
  return setValue(this.gridUnitTypeProperty, v);
}
GridLength.prototype.get$value = function() {
  return getValue(this.valueProperty);
}
GridLength.prototype.set$value = function(v) {
  return setValue(this.valueProperty, v);
}
GridLength.prototype._initGridUnitTypeProperties = function() {
  this.gridUnitTypeProperty = new FrameworkProperty(this, "gridUnitType", (function (v) {

  })
  , const$381/*GridUnitType.auto*/);
  this.valueProperty = new FrameworkProperty(this, "value", (function (v) {

  })
  , -1);
}
// ********** Code for GridUnitType **************
function GridUnitType(_val) {
  this._val = _val;
  // Initializers done
}
GridUnitType.prototype.toString = function() {
  switch (this._val) {
    case 1:

      return "star";

    case 2:

      return "pixel";

    case 3:

      return "auto";

    default:

      $throw(const$376/*const FrameworkException("Invalid GridUntiType value.")*/);

  }
}
GridUnitType.prototype.toString$0 = GridUnitType.prototype.toString;
// ********** Code for _BorderContainer **************
$inherits(_BorderContainer, _VirtualContainer);
function _BorderContainer() {
  // Initializers done
  _VirtualContainer.call(this);
  _Dom.appendClass(this._component, "luca_ui_bordercontainer");
  this.set$horizontalAlignment(const$53/*HorizontalAlignment.Stretch*/);
  this.set$verticalAlignment(const$63/*VerticalAlignment.Stretch*/);
}
FrameworkElement.prototype.get$parent = function() {
  return this._parent;
}
_BorderContainer.prototype.set$parent = function(value) {
  if (!((value instanceof Border))) $throw(const$87/*const FrameworkException(parentErrorMessage)*/);
  this._parent = value;
}
_VirtualContainer.prototype.get$content = function() {
  return this._content;
}
_BorderContainer.prototype.set$content = function(element) {
  if (this._content != null) {
    this._content._component.remove();
    this._content._containerParent = null;
    this._unRegisterChild(this._content);
  }
  if (element != null) {
    this._content = element;
    this._content._containerParent = this;
    this._registerChild(this._content);
    this._component.get$nodes().add(this.get$content()._component);
    this.updateLayout();
  }
  else {
    this._content = null;
  }
}
_BorderContainer.prototype.CreateElement = function() {
  _VirtualContainer.prototype.CreateElement.call(this);
  this._component.get$style().set$display("table-cell");
}
_BorderContainer.prototype.updateLayout = function() {
  if (this.get$content() == null || !this._isLoaded) return;
  LucaSystem.setHorizontalFlexBoxAlignment(this, this.get$content().get$horizontalAlignment());
  LucaSystem.setVerticalFlexBoxAlignment(this, this.get$content().get$verticalAlignment());
}
_BorderContainer.prototype.get$_type = function() {
  return "BorderContainer";
}
_BorderContainer.prototype.updateLayout$0 = _BorderContainer.prototype.updateLayout;
// ********** Code for _StyleTemplateImplementation **************
$inherits(_StyleTemplateImplementation, LucaObject);
function _StyleTemplateImplementation() {
  this._stateBagPrefix = "__StyleBinding__"
  this._registeredElements = new HashSetImplementation();
  this._setters = new HashMapImplementation();
  // Initializers done
  LucaObject.call(this);
}
_StyleTemplateImplementation.prototype.mergeWith = function(templates) {
  var $this = this; // closure support
  if (templates == null || templates.isEmpty()) return;
  for (var $$i = 0;$$i < templates.get$length(); $$i++) {
    var style = templates.$index($$i);
    if (style == null || $eq(style, this)) continue;
    style._setters.forEach((function (_, s) {
      $this.setProperty(s.propertyName, s.get$value());
    })
    );
  }
}
_StyleTemplateImplementation.prototype.setProperty = function(property, newValue) {
  if ((newValue instanceof FrameworkObject)) $throw(const$401/*const FrameworkException("LUCA UI Framework Objects cannot be passed as StyleTemplate setter values.")*/);
  if (this._setters.containsKey(property)) {
    this._setters.$index(property).set$value(newValue);
  }
  else {
    this._setters.$setindex(property, new StyleSetter(property, newValue));
    this._registerNewSetterBindings(this._setters.$index(property));
  }
}
_StyleTemplateImplementation.prototype._registerNewSetterBindings = function(newSetter) {
  var $this = this; // closure support
  this._registeredElements.forEach((function (e) {
    $this._bindSetterToElement(newSetter, e);
  })
  );
}
_StyleTemplateImplementation.prototype._registerElement = function(element) {
  this._registeredElements.add(element);
  this._setStyleBindings(element);
}
_StyleTemplateImplementation.prototype._unregisterElement = function(element) {
  if (this._registeredElements.contains(element)) {
    this._registeredElements.remove(element);
    this._unsetStyleBindings(element);
  }
}
_StyleTemplateImplementation.prototype._setStyleBindings = function(element) {
  var $this = this; // closure support
  this._setters.forEach((function (_, s) {
    $this._bindSetterToElement(s, element);
  })
  );
}
_StyleTemplateImplementation.prototype._unsetStyleBindings = function(element) {
  var $this = this; // closure support
  element._stateBag.forEach((function (k, v) {
    if (k.startsWith($this._stateBagPrefix)) {
      v.unregister$0();
      element._stateBag.remove(k);
    }
  })
  );
}
_StyleTemplateImplementation.prototype._bindSetterToElement = function(setter, element) {
  var $this = this; // closure support
  element._frameworkProperties.filter((function (p) {
    return p.propertyName == setter.propertyName;
  })
  ).forEach$1((function (p) {
    var b = new _BindingImplementation(setter.valueProperty, p, const$73/*BindingMode.OneWay*/, const$75/*const _DefaultConverter()*/);
    p.sourceObject._stateBag.$setindex(("" + $this._stateBagPrefix + setter.propertyName + "__"), b);
  })
  );
}
// ********** Code for Thickness **************
function Thickness(uniformThickness) {
  this.left = uniformThickness;
  this.right = uniformThickness;
  this.top = uniformThickness;
  this.bottom = uniformThickness;
  // Initializers done
}
Thickness.widthheight$ctor = function(width, height) {
  this.left = width;
  this.right = width;
  this.top = height;
  this.bottom = height;
  // Initializers done
}
Thickness.widthheight$ctor.prototype = Thickness.prototype;
Thickness.specified$ctor = function(top, right, bottom, left) {
  this.top = top;
  this.right = right;
  this.bottom = bottom;
  this.left = left;
  // Initializers done
}
Thickness.specified$ctor.prototype = Thickness.prototype;
Thickness.prototype.get$bottom = function() { return this.bottom; };
Thickness.prototype.get$left = function() { return this.left; };
Thickness.prototype.get$right = function() { return this.right; };
Thickness.prototype.get$top = function() { return this.top; };
Thickness.prototype.toString = function() {
  return ("" + this.top + " " + this.right + " " + this.bottom + " " + this.left);
}
Thickness.prototype.toString$0 = Thickness.prototype.toString;
// ********** Code for StringToThicknessConverter **************
function StringToThicknessConverter() {
  // Initializers done
}
StringToThicknessConverter.prototype.convert = function(value, parameter) {
  if (!((typeof(value) == 'string'))) return value;
  var svl = value.split$1(",");
  switch (svl.get$length()) {
    case 1:

      return new Thickness(Math.parseInt(svl.$index(0).trim$0()));

    case 2:

      return new Thickness.widthheight$ctor(Math.parseInt(svl.$index(0).trim$0()), Math.parseInt(svl.$index(1).trim$0()));

    case 4:

      return new Thickness.specified$ctor(Math.parseInt(svl.$index(0).trim$0()), Math.parseInt(svl.$index(1).trim$0()), Math.parseInt(svl.$index(2).trim$0()), Math.parseInt(svl.$index(3).trim$0()));

    default:

      $throw(const$8/*const FrameworkException("Unable to parse Thickness property string.  Use format '0', '0,0', or '0,0,0,0'")*/);

  }
}
StringToThicknessConverter.prototype.convert$1 = StringToThicknessConverter.prototype.convert;
// ********** Code for Visibility **************
function Visibility(_bool) {
  this._bool = _bool;
  // Initializers done
}
// ********** Code for Orientation **************
function Orientation(_str) {
  this._str = _str;
  // Initializers done
}
Orientation.prototype.toString = function() {
  return this._str;
}
Orientation.prototype.toString$0 = Orientation.prototype.toString;
// ********** Code for StringToOrientationConverter **************
function StringToOrientationConverter() {
  // Initializers done
}
StringToOrientationConverter.prototype.convert = function(value, parameter) {
  if (!((typeof(value) == 'string'))) return value;
  switch (value) {
    case "horizontal":

      return const$372/*Orientation.horizontal*/;

    case "vertical":

      return const$374/*Orientation.vertical*/;

    default:

      $throw(new FrameworkException(('Invalid orientation value "' + value + '".')));

  }
}
StringToOrientationConverter.prototype.convert$1 = StringToOrientationConverter.prototype.convert;
// ********** Code for HorizontalAlignment **************
function HorizontalAlignment(_val) {
  this._val = _val;
  // Initializers done
}
HorizontalAlignment.prototype.asString = function() {
  switch (this) {
    case const$51/*HorizontalAlignment.Center*/:

      return "Center";

    case const$53/*HorizontalAlignment.Stretch*/:

      return "Stretch";

    case const$55/*HorizontalAlignment.Left*/:

      return "Left";

    case const$57/*HorizontalAlignment.Right*/:

      return "Right";

    default:

      $throw(const$59/*const FrameworkException("Undefined HorizontalAlignment value.")*/);

  }
}
HorizontalAlignment.prototype.toString = function() {
  return this.asString();
}
HorizontalAlignment.prototype.toString$0 = HorizontalAlignment.prototype.toString;
// ********** Code for StringToHorizontalAlignmentConverter **************
function StringToHorizontalAlignmentConverter() {
  // Initializers done
}
StringToHorizontalAlignmentConverter.prototype.convert = function(value, parameter) {
  if (!((typeof(value) == 'string'))) return value;
  switch (value) {
    case "center":

      return const$51/*HorizontalAlignment.Center*/;

    case "stretch":

      return const$53/*HorizontalAlignment.Stretch*/;

    case "left":

      return const$55/*HorizontalAlignment.Left*/;

    case "right":

      return const$57/*HorizontalAlignment.Right*/;

    default:

      $throw(new FrameworkException(('Invalid horizontalAlignment value "' + value + '".')));

  }
}
StringToHorizontalAlignmentConverter.prototype.convert$1 = StringToHorizontalAlignmentConverter.prototype.convert;
// ********** Code for VerticalAlignment **************
function VerticalAlignment(_val) {
  this._val = _val;
  // Initializers done
}
VerticalAlignment.prototype.asString = function() {
  switch (this) {
    case const$61/*VerticalAlignment.Center*/:

      return "Center";

    case const$63/*VerticalAlignment.Stretch*/:

      return "Stretch";

    case const$65/*VerticalAlignment.Top*/:

      return "Top";

    case const$67/*VerticalAlignment.Bottom*/:

      return "Bottom";

    default:

      $throw(const$69/*const FrameworkException("Undefined VerticalAlignment value.")*/);

  }
}
VerticalAlignment.prototype.toString = function() {
  return this.asString();
}
VerticalAlignment.prototype.toString$0 = VerticalAlignment.prototype.toString;
// ********** Code for StringToVerticalAlignmentConverter **************
function StringToVerticalAlignmentConverter() {
  // Initializers done
}
StringToVerticalAlignmentConverter.prototype.convert = function(value, parameter) {
  if (!((typeof(value) == 'string'))) return value;
  switch (value) {
    case "center":

      return const$61/*VerticalAlignment.Center*/;

    case "stretch":

      return const$63/*VerticalAlignment.Stretch*/;

    case "top":

      return const$65/*VerticalAlignment.Top*/;

    case "bottom":

      return const$67/*VerticalAlignment.Bottom*/;

    default:

      $throw(new FrameworkException(('Invalid verticalAlignment value "' + value + '".')));

  }
}
StringToVerticalAlignmentConverter.prototype.convert$1 = StringToVerticalAlignmentConverter.prototype.convert;
// ********** Code for Brush **************
$inherits(Brush, LucaObject);
function Brush() {
  // Initializers done
  LucaObject.call(this);
}
// ********** Code for SolidColorBrush **************
$inherits(SolidColorBrush, Brush);
function SolidColorBrush(color) {
  this.color = color;
  // Initializers done
  Brush.call(this);
}
SolidColorBrush.prototype.get$color = function() { return this.color; };
SolidColorBrush.prototype.renderBrush = function(element) {
  element.get$style().set$background(("" + this.color.toString()));
}
// ********** Code for Color **************
$inherits(Color, HashableObject);
function Color(color) {
  // Initializers done
  HashableObject.call(this);
  this._parseAndLoadColors(color._hex);
}
Color.hex$ctor = function(hex) {
  // Initializers done
  HashableObject.call(this);
  this._parseAndLoadColors(hex);
}
Color.hex$ctor.prototype = Color.prototype;
Color.prototype._parseAndLoadColors = function(color) {
  if (!color.startsWith("#")) return;
  var c = color.replaceFirst("#", "");
  if (c.length != 6) return;
  this._rawR = c.substring(0, 2);
  this._rawG = c.substring(2, 4);
  this._rawB = c.substring(4, 6);
  this.R = Math.parseInt("0x" + this._rawR);
  this.G = Math.parseInt("0x" + this._rawG);
  this.B = Math.parseInt("0x" + this._rawB);
}
Color.prototype.toString = function() {
  return "#" + this._rawR + this._rawG + this._rawB;
}
Color.prototype.toString$0 = Color.prototype.toString;
// ********** Code for Colors **************
function Colors(_hex, _name) {
  this._hex = _hex;
  this._name = _name;
  // Initializers done
}
Colors.prototype.toString = function() {
  return this._hex;
}
Colors.prototype.get$name = function() {
  return this._name;
}
Colors.prototype.toString$0 = Colors.prototype.toString;
// ********** Code for StringToSolidColorBrushConverter **************
function StringToSolidColorBrushConverter() {
  // Initializers done
}
StringToSolidColorBrushConverter.prototype.convert = function(value, parameter) {
  if (value.startsWith$1("#")) {
    return new SolidColorBrush(new Color.hex$ctor(value));
  }
  switch (value) {
    case "AliceBlue":

      return new SolidColorBrush(new Color(const$90/*Colors.AliceBlue*/));

    case "AntiqueWhite":

      return new SolidColorBrush(new Color(const$92/*Colors.AntiqueWhite*/));

    case "Aqua":

      return new SolidColorBrush(new Color(const$94/*Colors.Aqua*/));

    case "Aquamarine":

      return new SolidColorBrush(new Color(const$96/*Colors.Aquamarine*/));

    case "Azure":

      return new SolidColorBrush(new Color(const$98/*Colors.Azure*/));

    case "Beige":

      return new SolidColorBrush(new Color(const$100/*Colors.Beige*/));

    case "Bisque":

      return new SolidColorBrush(new Color(const$102/*Colors.Bisque*/));

    case "Black":

      return new SolidColorBrush(new Color(const$104/*Colors.Black*/));

    case "BlanchedAlmond":

      return new SolidColorBrush(new Color(const$106/*Colors.BlanchedAlmond*/));

    case "Blue":

      return new SolidColorBrush(new Color(const$108/*Colors.Blue*/));

    case "BlueViolet":

      return new SolidColorBrush(new Color(const$110/*Colors.BlueViolet*/));

    case "Brown":

      return new SolidColorBrush(new Color(const$112/*Colors.Brown*/));

    case "BurlyWood":

      return new SolidColorBrush(new Color(const$114/*Colors.BurlyWood*/));

    case "CadetBlue":

      return new SolidColorBrush(new Color(const$116/*Colors.CadetBlue*/));

    case "Chartreuse":

      return new SolidColorBrush(new Color(const$118/*Colors.Chartreuse*/));

    case "Chocolate":

      return new SolidColorBrush(new Color(const$120/*Colors.Chocolate*/));

    case "Coral":

      return new SolidColorBrush(new Color(const$122/*Colors.Coral*/));

    case "ConflowerBlue":

      return new SolidColorBrush(new Color(const$124/*Colors.ConflowerBlue*/));

    case "Cornsilk":

      return new SolidColorBrush(new Color(const$126/*Colors.Cornsilk*/));

    case "Crimson":

      return new SolidColorBrush(new Color(const$128/*Colors.Crimson*/));

    case "Cyan":

      return new SolidColorBrush(new Color(const$130/*Colors.Cyan*/));

    case "DarkBlue":

      return new SolidColorBrush(new Color(const$132/*Colors.DarkBlue*/));

    case "DarkCyan":

      return new SolidColorBrush(new Color(const$134/*Colors.DarkCyan*/));

    case "DarkGoldenrod":

      return new SolidColorBrush(new Color(const$136/*Colors.DarkGoldenrod*/));

    case "DarkGray":

      return new SolidColorBrush(new Color(const$138/*Colors.DarkGray*/));

    case "DarkGreen":

      return new SolidColorBrush(new Color(const$140/*Colors.DarkGreen*/));

    case "DarkKhaki":

      return new SolidColorBrush(new Color(const$142/*Colors.DarkKhaki*/));

    case "DarkMagenta":

      return new SolidColorBrush(new Color(const$144/*Colors.DarkMagenta*/));

    case "DarkOliveGreen":

      return new SolidColorBrush(new Color(const$146/*Colors.DarkOliveGreen*/));

    case "DarkOrange":

      return new SolidColorBrush(new Color(const$148/*Colors.DarkOrange*/));

    case "DarkOrchid":

      return new SolidColorBrush(new Color(const$150/*Colors.DarkOrchid*/));

    case "DarkRed":

      return new SolidColorBrush(new Color(const$152/*Colors.DarkRed*/));

    case "DarkSalmon":

      return new SolidColorBrush(new Color(const$154/*Colors.DarkSalmon*/));

    case "DarkSeaGreen":

      return new SolidColorBrush(new Color(const$156/*Colors.DarkSeaGreen*/));

    case "DarkSlateBlue":

      return new SolidColorBrush(new Color(const$158/*Colors.DarkSlateBlue*/));

    case "DarkSlateGray":

      return new SolidColorBrush(new Color(const$160/*Colors.DarkSlateGray*/));

    case "DarkTurquoise":

      return new SolidColorBrush(new Color(const$162/*Colors.DarkTurquoise*/));

    case "DarkViolet":

      return new SolidColorBrush(new Color(const$164/*Colors.DarkViolet*/));

    case "DeepPink":

      return new SolidColorBrush(new Color(const$166/*Colors.DeepPink*/));

    case "DeepSkyBlue":

      return new SolidColorBrush(new Color(const$168/*Colors.DeepSkyBlue*/));

    case "DimGray":

      return new SolidColorBrush(new Color(const$170/*Colors.DimGray*/));

    case "DodgerBlue":

      return new SolidColorBrush(new Color(const$172/*Colors.DodgerBlue*/));

    case "Firebrick":

      return new SolidColorBrush(new Color(const$174/*Colors.Firebrick*/));

    case "FloralWhite":

      return new SolidColorBrush(new Color(const$176/*Colors.FloralWhite*/));

    case "ForestGreen":

      return new SolidColorBrush(new Color(const$178/*Colors.ForestGreen*/));

    case "Fuchsia":

      return new SolidColorBrush(new Color(const$180/*Colors.Fuchsia*/));

    case "Gainsboro":

      return new SolidColorBrush(new Color(const$182/*Colors.Gainsboro*/));

    case "GhostWhite":

      return new SolidColorBrush(new Color(const$184/*Colors.GhostWhite*/));

    case "Gold":

      return new SolidColorBrush(new Color(const$186/*Colors.Gold*/));

    case "Goldenrod":

      return new SolidColorBrush(new Color(const$188/*Colors.Goldenrod*/));

    case "Gray":

      return new SolidColorBrush(new Color(const$190/*Colors.Gray*/));

    case "Green":

      return new SolidColorBrush(new Color(const$192/*Colors.Green*/));

    case "GreenYellow":

      return new SolidColorBrush(new Color(const$194/*Colors.GreenYellow*/));

    case "Honeydew":

      return new SolidColorBrush(new Color(const$196/*Colors.Honeydew*/));

    case "HotPink":

      return new SolidColorBrush(new Color(const$198/*Colors.HotPink*/));

    case "IndianRed":

      return new SolidColorBrush(new Color(const$200/*Colors.IndianRed*/));

    case "Indigo":

      return new SolidColorBrush(new Color(const$202/*Colors.Indigo*/));

    case "Ivory":

      return new SolidColorBrush(new Color(const$204/*Colors.Ivory*/));

    case "Khaki":

      return new SolidColorBrush(new Color(const$206/*Colors.Khaki*/));

    case "Lavender":

      return new SolidColorBrush(new Color(const$208/*Colors.Lavender*/));

    case "LavenderBlush":

      return new SolidColorBrush(new Color(const$210/*Colors.LavenderBlush*/));

    case "LawnGreen":

      return new SolidColorBrush(new Color(const$212/*Colors.LawnGreen*/));

    case "LemonChiffon":

      return new SolidColorBrush(new Color(const$214/*Colors.LemonChiffon*/));

    case "LightBlue":

      return new SolidColorBrush(new Color(const$216/*Colors.LightBlue*/));

    case "LightCoral":

      return new SolidColorBrush(new Color(const$218/*Colors.LightCoral*/));

    case "LightCyan":

      return new SolidColorBrush(new Color(const$220/*Colors.LightCyan*/));

    case "LightGoldenrod":

      return new SolidColorBrush(new Color(const$222/*Colors.LightGoldenrod*/));

    case "LightGray":

      return new SolidColorBrush(new Color(const$224/*Colors.LightGray*/));

    case "LightGreen":

      return new SolidColorBrush(new Color(const$226/*Colors.LightGreen*/));

    case "LightPink":

      return new SolidColorBrush(new Color(const$228/*Colors.LightPink*/));

    case "LightSalmon":

      return new SolidColorBrush(new Color(const$230/*Colors.LightSalmon*/));

    case "LightSeaGreen":

      return new SolidColorBrush(new Color(const$232/*Colors.LightSeaGreen*/));

    case "LightSkyBlue":

      return new SolidColorBrush(new Color(const$234/*Colors.LightSkyBlue*/));

    case "LightSlateGray":

      return new SolidColorBrush(new Color(const$236/*Colors.LightSlateGray*/));

    case "LightSteelBlue":

      return new SolidColorBrush(new Color(const$238/*Colors.LightSteelBlue*/));

    case "LightYellow":

      return new SolidColorBrush(new Color(const$240/*Colors.LightYellow*/));

    case "Lime":

      return new SolidColorBrush(new Color(const$242/*Colors.Lime*/));

    case "LimeGreen":

      return new SolidColorBrush(new Color(const$244/*Colors.LimeGreen*/));

    case "Linen":

      return new SolidColorBrush(new Color(const$246/*Colors.Linen*/));

    case "Magenta":

      return new SolidColorBrush(new Color(const$248/*Colors.Magenta*/));

    case "Maroon":

      return new SolidColorBrush(new Color(const$250/*Colors.Maroon*/));

    case "MediumAquamarine":

      return new SolidColorBrush(new Color(const$252/*Colors.MediumAquamarine*/));

    case "MediumBlue":

      return new SolidColorBrush(new Color(const$254/*Colors.MediumBlue*/));

    case "MediumOrchid":

      return new SolidColorBrush(new Color(const$256/*Colors.MediumOrchid*/));

    case "MediumPurple":

      return new SolidColorBrush(new Color(const$258/*Colors.MediumPurple*/));

    case "MediumSeaGreen":

      return new SolidColorBrush(new Color(const$260/*Colors.MediumSeaGreen*/));

    case "MediumSlateBlue":

      return new SolidColorBrush(new Color(const$262/*Colors.MediumSlateBlue*/));

    case "MediumSpringGreen":

      return new SolidColorBrush(new Color(const$264/*Colors.MediumSpringGreen*/));

    case "MediumTurquoise":

      return new SolidColorBrush(new Color(const$266/*Colors.MediumTurquoise*/));

    case "MediumVioletRed":

      return new SolidColorBrush(new Color(const$268/*Colors.MediumVioletRed*/));

    case "MidnightBlue":

      return new SolidColorBrush(new Color(const$270/*Colors.MidnightBlue*/));

    case "MintCream":

      return new SolidColorBrush(new Color(const$272/*Colors.MintCream*/));

    case "MistyRose":

      return new SolidColorBrush(new Color(const$274/*Colors.MistyRose*/));

    case "Moccasin":

      return new SolidColorBrush(new Color(const$276/*Colors.Moccasin*/));

    case "NavajoWhite":

      return new SolidColorBrush(new Color(const$278/*Colors.NavajoWhite*/));

    case "Navy":

      return new SolidColorBrush(new Color(const$280/*Colors.Navy*/));

    case "OldLace":

      return new SolidColorBrush(new Color(const$282/*Colors.OldLace*/));

    case "Olive":

      return new SolidColorBrush(new Color(const$284/*Colors.Olive*/));

    case "OliveDrab":

      return new SolidColorBrush(new Color(const$286/*Colors.OliveDrab*/));

    case "Orange":

      return new SolidColorBrush(new Color(const$288/*Colors.Orange*/));

    case "OrangeRed":

      return new SolidColorBrush(new Color(const$290/*Colors.OrangeRed*/));

    case "Orchid":

      return new SolidColorBrush(new Color(const$292/*Colors.Orchid*/));

    case "PaleGoldenrod":

      return new SolidColorBrush(new Color(const$294/*Colors.PaleGoldenrod*/));

    case "PaleGreen":

      return new SolidColorBrush(new Color(const$296/*Colors.PaleGreen*/));

    case "PaleTurquoise":

      return new SolidColorBrush(new Color(const$298/*Colors.PaleTurquoise*/));

    case "PaleVioletRed":

      return new SolidColorBrush(new Color(const$300/*Colors.PaleVioletRed*/));

    case "PapayaWhip":

      return new SolidColorBrush(new Color(const$302/*Colors.PapayaWhip*/));

    case "PeachPuff":

      return new SolidColorBrush(new Color(const$304/*Colors.PeachPuff*/));

    case "Peru":

      return new SolidColorBrush(new Color(const$306/*Colors.Peru*/));

    case "Pink":

      return new SolidColorBrush(new Color(const$308/*Colors.Pink*/));

    case "Plum":

      return new SolidColorBrush(new Color(const$310/*Colors.Plum*/));

    case "PowderBlue":

      return new SolidColorBrush(new Color(const$312/*Colors.PowderBlue*/));

    case "Purple":

      return new SolidColorBrush(new Color(const$314/*Colors.Purple*/));

    case "Red":

      return new SolidColorBrush(new Color(const$316/*Colors.Red*/));

    case "RosyBrown":

      return new SolidColorBrush(new Color(const$318/*Colors.RosyBrown*/));

    case "RoyalBlue":

      return new SolidColorBrush(new Color(const$320/*Colors.RoyalBlue*/));

    case "SaddleBrown":

      return new SolidColorBrush(new Color(const$322/*Colors.SaddleBrown*/));

    case "Salmon":

      return new SolidColorBrush(new Color(const$324/*Colors.Salmon*/));

    case "SandyBrown":

      return new SolidColorBrush(new Color(const$326/*Colors.SandyBrown*/));

    case "SeaGreen":

      return new SolidColorBrush(new Color(const$328/*Colors.SeaGreen*/));

    case "SeaShell":

      return new SolidColorBrush(new Color(const$330/*Colors.SeaShell*/));

    case "Sienna":

      return new SolidColorBrush(new Color(const$332/*Colors.Sienna*/));

    case "Silver":

      return new SolidColorBrush(new Color(const$334/*Colors.Silver*/));

    case "SkyBlue":

      return new SolidColorBrush(new Color(const$336/*Colors.SkyBlue*/));

    case "SlateBlue":

      return new SolidColorBrush(new Color(const$338/*Colors.SlateBlue*/));

    case "SlateGray":

      return new SolidColorBrush(new Color(const$340/*Colors.SlateGray*/));

    case "Snow":

      return new SolidColorBrush(new Color(const$342/*Colors.Snow*/));

    case "SpringGreen":

      return new SolidColorBrush(new Color(const$344/*Colors.SpringGreen*/));

    case "SteelBlue":

      return new SolidColorBrush(new Color(const$346/*Colors.SteelBlue*/));

    case "Tan":

      return new SolidColorBrush(new Color(const$348/*Colors.Tan*/));

    case "Teal":

      return new SolidColorBrush(new Color(const$350/*Colors.Teal*/));

    case "Thistle":

      return new SolidColorBrush(new Color(const$352/*Colors.Thistle*/));

    case "Tomato":

      return new SolidColorBrush(new Color(const$354/*Colors.Tomato*/));

    case "Turquoise":

      return new SolidColorBrush(new Color(const$356/*Colors.Turquoise*/));

    case "Violet":

      return new SolidColorBrush(new Color(const$358/*Colors.Violet*/));

    case "Wheat":

      return new SolidColorBrush(new Color(const$360/*Colors.Wheat*/));

    case "White":

      return new SolidColorBrush(new Color(const$362/*Colors.White*/));

    case "WhiteSmoke":

      return new SolidColorBrush(new Color(const$364/*Colors.WhiteSmoke*/));

    case "Yellow":

      return new SolidColorBrush(new Color(const$366/*Colors.Yellow*/));

    case "YellowGreen":

      return new SolidColorBrush(new Color(const$368/*Colors.YellowGreen*/));

    default:

      $throw(new FrameworkException(("Pre-defined color '" + value + "' is not found.")));

  }
}
StringToSolidColorBrushConverter.prototype.convert$1 = StringToSolidColorBrushConverter.prototype.convert;
// ********** Code for Cursors **************
function Cursors(_str) {
  this._str = _str;
  // Initializers done
}
// ********** Code for StringToCursorConverter **************
function StringToCursorConverter() {
  // Initializers done
}
StringToCursorConverter.prototype.convert = function(value, parameter) {
  if (!((typeof(value) == 'string'))) return value;
  switch (value) {
    case "Auto":

      return const$15/*Cursors.Auto*/;

    case "Crosshair":

      return const$17/*Cursors.Crosshair*/;

    case "Default":

      return const$19/*Cursors.Default*/;

    case "ResizeE":

      return const$21/*Cursors.ResizeE*/;

    case "Help":

      return const$23/*Cursors.Help*/;

    case "Move":

      return const$25/*Cursors.Move*/;

    case "ResizeN":

      return const$27/*Cursors.ResizeN*/;

    case "ResizeNE":

      return const$29/*Cursors.ResizeNE*/;

    case "ResizeNW":

      return const$31/*Cursors.ResizeNW*/;

    case "Pointer":

      return const$33/*Cursors.Pointer*/;

    case "Progress":

      return const$35/*Cursors.Progress*/;

    case "ResizeS":

      return const$37/*Cursors.ResizeS*/;

    case "ResizeSE":

      return const$39/*Cursors.ResizeSE*/;

    case "ResizeSW":

      return const$41/*Cursors.ResizeSW*/;

    case "Text":

      return const$43/*Cursors.Text*/;

    case "Wait":

      return const$45/*Cursors.Wait*/;

    case "Inherit":

      return const$47/*Cursors.Inherit*/;

    default:

      $throw(const$49/*const FrameworkException("Cursor property value not recognized.")*/);

  }
}
StringToCursorConverter.prototype.convert$1 = StringToCursorConverter.prototype.convert;
// ********** Code for Tuple **************
function Tuple() {}
Tuple.with$ctor = function(first, second) {
  this.first = first;
  this.second = second;
  // Initializers done
}
Tuple.with$ctor.prototype = Tuple.prototype;
// ********** Code for Tuple_int **************
$inherits(Tuple_int, Tuple);
function Tuple_int() {}
Tuple_int.with$ctor = function(first, second) {
  this.first = first;
  this.second = second;
  // Initializers done
}
Tuple_int.with$ctor.prototype = Tuple_int.prototype;
// ********** Code for BindingMode **************
function BindingMode(_val) {
  this._val = _val;
  // Initializers done
}
// ********** Code for ListChangedEventArgs **************
$inherits(ListChangedEventArgs, EventArgs);
function ListChangedEventArgs(oldItems, newItems) {
  this.oldItems = oldItems;
  this.newItems = newItems;
  // Initializers done
  EventArgs.call(this);
}
ListChangedEventArgs.prototype.get$oldItems = function() { return this.oldItems; };
ListChangedEventArgs.prototype.get$newItems = function() { return this.newItems; };
// ********** Code for ListChangedEventArgs_ColumnDefinition **************
$inherits(ListChangedEventArgs_ColumnDefinition, ListChangedEventArgs);
function ListChangedEventArgs_ColumnDefinition() {}
// ********** Code for ListChangedEventArgs_FrameworkElement **************
$inherits(ListChangedEventArgs_FrameworkElement, ListChangedEventArgs);
function ListChangedEventArgs_FrameworkElement(oldItems, newItems) {
  this.oldItems = oldItems;
  this.newItems = newItems;
  // Initializers done
  EventArgs.call(this);
}
// ********** Code for ListChangedEventArgs_RowDefinition **************
$inherits(ListChangedEventArgs_RowDefinition, ListChangedEventArgs);
function ListChangedEventArgs_RowDefinition(oldItems, newItems) {
  this.oldItems = oldItems;
  this.newItems = newItems;
  // Initializers done
  EventArgs.call(this);
}
// ********** Code for ListChangedEventArgs_T **************
$inherits(ListChangedEventArgs_T, ListChangedEventArgs);
function ListChangedEventArgs_T(oldItems, newItems) {
  this.oldItems = oldItems;
  this.newItems = newItems;
  // Initializers done
  EventArgs.call(this);
}
// ********** Code for EventHandlerReference **************
$inherits(EventHandlerReference, HashableObject);
function EventHandlerReference(handler) {
  this.handler = handler;
  // Initializers done
  HashableObject.call(this);
}
EventHandlerReference.prototype.handler$2 = function($0, $1) {
  return this.handler($0, $1);
};
// ********** Code for LinearGradientBrush **************
$inherits(LinearGradientBrush, Brush);
function LinearGradientBrush(dir, fallback) {
  this.stops = new Array();
  // Initializers done
  Brush.call(this);
  if (dir == null) this.direction = const$402/*LinearGradientDirection.leftToRight*/;
  if (fallback == null) this.fallbackColor = new Color(const$362/*Colors.White*/);
}
LinearGradientBrush.prototype.renderBrush = function(element) {
  var $this = this; // closure support
  element.get$style().set$background(this.fallbackColor.toString());
  var colorString = "";
  this.stops.forEach((function (stop) {
    colorString = colorString + stop.color.toString();
    if (stop.percent != -1) colorString = colorString + (" " + stop.percent + "%");
    if ($ne(stop, $this.stops.last())) colorString = colorString + ", ";
  })
  );
  element.get$style().set$background(("-webkit-linear-gradient(" + this.direction.toString() + ", " + colorString + ")"));
  element.get$style().set$background(("-moz-linear-gradient(" + this.direction.toString() + ", " + colorString + ")"));
  element.get$style().set$background(("-ms-linear-gradient(" + this.direction.toString() + ", " + colorString + ")"));
  element.get$style().set$background(("-o-linear-gradient(" + this.direction.toString() + ", " + colorString + ")"));
  element.get$style().set$background(("linear-gradient(" + this.direction.toString() + ", " + colorString + ")"));
}
// ********** Code for GradientStop **************
$inherits(GradientStop, LucaObject);
function GradientStop(color, percent) {
  this.color = color;
  this.percent = percent;
  // Initializers done
  LucaObject.call(this);
}
GradientStop.prototype.get$color = function() { return this.color; };
// ********** Code for LinearGradientDirection **************
function LinearGradientDirection(_str) {
  this._str = _str;
  // Initializers done
}
LinearGradientDirection.prototype.toString = function() {
  return this._str;
}
LinearGradientDirection.prototype.toString$0 = LinearGradientDirection.prototype.toString;
// ********** Code for _RootElement **************
$inherits(_RootElement, Border);
function _RootElement() {
  // Initializers done
  Border.call(this);
  _Dom.appendClass(this._component, "luca_ui_root");
  this.set$name("luca_ui_root");
}
_RootElement.prototype.get$_type = function() {
  return "RootElement";
}
// ********** Code for _Dom **************
function _Dom() {}
_Dom.appendClass = function(element, classToAppend) {
  var currentClasses = element.get$attributes().$index("class");
  currentClasses = currentClasses == null || currentClasses == "null" ? "" : currentClasses;
  element.get$attributes().$setindex("class", currentClasses != "" ? currentClasses + " " + classToAppend : classToAppend);
}
_Dom.createByTag = function(tagName) {
  return ElementWrappingImplementation.ElementWrappingImplementation$tag$factory(tagName);
}
// ********** Code for StyleSetter **************
$inherits(StyleSetter, FrameworkObject);
function StyleSetter(propertyName, propertyValue) {
  this.propertyName = propertyName;
  // Initializers done
  FrameworkObject.call(this);
  this.valueProperty = new FrameworkProperty(this, "value", (function (v) {

  })
  , propertyValue);
}
StyleSetter.prototype.get$value = function() {
  return getValue(this.valueProperty);
}
StyleSetter.prototype.set$value = function(newValue) {
  return setValue(this.valueProperty, newValue);
}
StyleSetter.prototype.get$_type = function() {
  return "StyleSetter";
}
// ********** Code for Slider **************
$inherits(Slider, FrameworkElement);
function Slider() {
  // Initializers done
  FrameworkElement.call(this);
  _Dom.appendClass(this._component, "luca_ui_slider");
  this._initSliderProperties();
  this._initSliderEvents();
}
Slider.prototype._initSliderEvents = function() {
  var $this = this; // closure support
  this._component.get$on().get$change().add$1((function (e) {
    if ($this.get$value() == $this._component.get$value()) return;
    var oldValue = $this.get$value();
    $this.set$value($this._component.get$value());
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
}
Slider.prototype._initSliderProperties = function() {
  var $this = this; // closure support
  this.minProperty = new FrameworkProperty(this, "min", (function (v) {
    $this._component.get$attributes().$setindex("min", v.toString());
  })
  , 0);
  this.maxProperty = new FrameworkProperty(this, "max", (function (v) {
    $this._component.get$attributes().$setindex("max", v.toString());
  })
  , 100);
  this.stepProperty = new FrameworkProperty(this, "step", (function (v) {
    $this._component.get$attributes().$setindex("step", v.toString());
  })
  );
  this.valueProperty = new FrameworkProperty(this, "value", (function (v) {
    $this._component.get$attributes().$setindex("value", v.toString());
  })
  );
}
Slider.prototype.get$value = function() {
  return getValue(this.valueProperty);
}
Slider.prototype.set$value = function(v) {
  return setValue(this.valueProperty, v);
}
Slider.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("input");
  this._component.get$attributes().$setindex("type", "range");
}
Slider.prototype.get$_type = function() {
  return "Slider";
}
// ********** Code for StringToNumericConverter **************
function StringToNumericConverter() {
  // Initializers done
}
StringToNumericConverter.prototype.convert = function(value, parameter) {
  try {
    return Math.parseInt(value);
  } catch (e) {
    e = _toDartException(e);
    if (!(e && e.is$Exception())) throw e;
    return value;
  }
}
StringToNumericConverter.prototype.convert$1 = StringToNumericConverter.prototype.convert;
// ********** Code for TextArea **************
$inherits(TextArea, FrameworkElement);
function TextArea() {
  this.textChanged = new _FrameworkEventImplementation();
  // Initializers done
  FrameworkElement.call(this);
  _Dom.appendClass(this._component, "luca_ui_textarea");
  this._initProperties();
  this._stateBag.$setindex("CONTAINER_CONTEXT"/*FrameworkObject.CONTAINER_CONTEXT*/, this.textProperty);
  this._initEvents();
}
TextArea.prototype._initProperties = function() {
  var $this = this; // closure support
  this.placeholderProperty = new FrameworkProperty(this, "placeholder", (function (value) {
    $this._component.get$attributes().$setindex("placeholder", value);
  })
  );
  this.textProperty = new FrameworkProperty(this, "text", (function (value) {
    $this._component.set$value(value);
  })
  , "");
  this.spellcheckProperty = new FrameworkProperty(this, "spellcheck", (function (value) {
    $this._component.get$attributes().$setindex("spellcheck", value.toString());
  })
  );
  this.spellcheckProperty.stringToValueConverter = const$385/*const StringToBooleanConverter()*/;
}
TextArea.prototype._initEvents = function() {
  var $this = this; // closure support
  this._component.get$on().get$keyUp().add$1((function (e) {
    if ($this.get$text() == $this._component.get$value()) return;
    var oldValue = $this.get$text();
    $this.set$text($this._component.get$value());
    if (!$this.textChanged.get$hasHandlers()) return;
    $this.textChanged.invoke($this, new TextChangedEventArgs.with$ctor(oldValue, $this.get$text()));
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
  this._component.get$on().get$change().add$1((function (e) {
    if ($this.get$text() == $this._component.get$value()) return;
    var oldValue = $this.get$text();
    $this.set$text($this._component.get$value());
    if (!$this.textChanged.get$hasHandlers()) return;
    $this.textChanged.invoke($this, new TextChangedEventArgs.with$ctor(oldValue, $this.get$text()));
    if (e.get$cancelable()) e.set$cancelBubble(true);
  })
  );
}
TextArea.prototype.get$text = function() {
  return getValue(this.textProperty);
}
TextArea.prototype.set$text = function(value) {
  return setValue(this.textProperty, value);
}
TextArea.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("textarea");
}
TextArea.prototype.get$_type = function() {
  return "TextArea";
}
// ********** Code for StringToBooleanConverter **************
function StringToBooleanConverter() {
  // Initializers done
}
StringToBooleanConverter.prototype.convert = function(value, parameter) {
  if (!((typeof(value) == 'string'))) return value;
  if ($eq(value.toLowerCase$0(), "false")) {
    return false;
  }
  else if ($eq(value.toLowerCase$0(), "true")) {
    return true;
  }
  else {
    $throw(new FrameworkException(("Invalid string passed to boolean converter: '" + value + "'.")));
  }
}
StringToBooleanConverter.prototype.convert$1 = StringToBooleanConverter.prototype.convert;
// ********** Code for Hyperlink **************
$inherits(Hyperlink, FrameworkElement);
function Hyperlink() {
  var $this = this; // closure support
  // Initializers done
  FrameworkElement.call(this);
  _Dom.appendClass(this._component, "luca_ui_hyperlink");
  this.contentProperty = new FrameworkProperty(this, "content", (function (value) {
    if (($this._content instanceof TextBlock) && (typeof(value) == 'string')) {
      $this._content.set$text(value);
      return;
    }
    $this._component.get$style().set$textDecoration("none");
    if ((typeof(value) == 'string')) {
      var tempStr = value;
      $this._component.get$style().set$textDecoration("underline");
      value = new TextBlock();
      value.set$text(tempStr);
    }
    if ($this._content != null) {
      $this._content.get$_component().remove$0();
      $this._content.set$parent(null);
    }
    if (value != null) {
      $this._content = value;
      $this._content.set$parent($this);
      $this._component.get$nodes().add($this._content.get$_component());
    }
    else {
      $this._content = null;
    }
  })
  );
  this._stateBag.$setindex("CONTAINER_CONTEXT"/*FrameworkObject.CONTAINER_CONTEXT*/, this.contentProperty);
  this.targetNameProperty = new FrameworkProperty(this, "targetName", (function (value) {
    $this._component.get$attributes().$setindex("target", value.toString());
  })
  , "_self");
  this.navigateToProperty = new FrameworkProperty(this, "navigateTo", (function (value) {
    $this._component.get$attributes().$setindex("href", value.toString());
  })
  );
  this.foregroundProperty = new FrameworkProperty(this, "foreground", (function (value) {
    $this._component.get$style().set$color(value.get$color().toString$0());
  })
  , new SolidColorBrush(new Color(const$104/*Colors.Black*/)));
  this.foregroundProperty.stringToValueConverter = const$370/*const StringToSolidColorBrushConverter()*/;
  this.fontSizeProperty = new FrameworkProperty(this, "fontSize", (function (value) {
    $this._component.get$style().set$fontSize(('' + value.toString$0() + 'px'));
  })
  );
  this.fontFamilyProperty = new FrameworkProperty(this, "fontFamily", (function (value) {
    $this._component.get$style().set$fontFamily(value.toString$0());
  })
  );
}
Hyperlink.prototype.get$content = function() {
  return getValue(this.contentProperty);
}
Hyperlink.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("a");
}
Hyperlink.prototype.get$_type = function() {
  return "Hyperlink";
}
// ********** Code for Image **************
$inherits(Image, FrameworkElement);
function Image() {
  // Initializers done
  FrameworkElement.call(this);
  _Dom.appendClass(this._component, "luca_ui_image");
  this._initializeImageProperties();
}
Image.prototype._initializeImageProperties = function() {
  var $this = this; // closure support
  this.sourceUriProperty = new FrameworkProperty(this, "sourceUri", (function (value) {
    $this._component.get$attributes().$setindex("src", value.toString());
  })
  );
  this.altProperty = new FrameworkProperty(this, "alt", (function (value) {
    $this._component.get$attributes().$setindex("alt", value.toString());
  })
  , "undefined");
}
Image.prototype.CreateElement = function() {
  this._component = _Dom.createByTag("img");
}
Image.prototype.get$_type = function() {
  return "Image";
}
// ********** Code for top level **************
function setValue(property, value) {
  if (property.stringToValueConverter != null && (typeof(value) == 'string')) {
    value = property.stringToValueConverter.convert(value);
  }
  if ($eq(property.value, value)) return;
  property.previousValue = property.value;
  property.value = value;
  var f = property.propertyChangedCallback;
  f.call$1(value);
  _BindingImplementation._executeBindingsFor(property);
  if (property.propertyChanging.get$hasHandlers()) property.propertyChanging.invoke(property.sourceObject, new PropertyChangingEventArgs(property.previousValue, value));
}
function getValue(propertyInfo) {
  if (propertyInfo == null) return null;
  return propertyInfo.value;
}
//  ********** Library LUCA UI Demo Style Templates **************
// ********** Code for _templateResources **************
function _templateResources() {
  this.contentBorderStyle = new _StyleTemplateImplementation();
  this.innerBorderStyle = new _StyleTemplateImplementation();
  this.mainGridStyle = new _StyleTemplateImplementation();
  this.titleTextBlockStyle = new _StyleTemplateImplementation();
  this.subTitleTextBlockStyle = new _StyleTemplateImplementation();
  this.centeredStyle = new _StyleTemplateImplementation();
  this.stretchedStyle = new _StyleTemplateImplementation();
  // Initializers done
  this._initCenteredStyle();
  this._initStretchedStyle();
  this._initContentBorder();
  this._initInnerBorder();
  this._initMainGrid();
  this._initTitleTextBlock();
  this._initSubTitleTextBlock();
}
_templateResources.prototype._initStretchedStyle = function() {
  this.stretchedStyle.setProperty("horizontalAlignment", const$53/*HorizontalAlignment.Stretch*/);
  this.stretchedStyle.setProperty("verticalAlignment", const$63/*VerticalAlignment.Stretch*/);
}
_templateResources.prototype._initCenteredStyle = function() {
  this.centeredStyle.setProperty("horizontalAlignment", const$51/*HorizontalAlignment.Center*/);
  this.centeredStyle.setProperty("verticalAlignment", const$61/*VerticalAlignment.Center*/);
}
_templateResources.prototype._initTitleTextBlock = function() {
  this.titleTextBlockStyle.setProperty("fontSize", 32);
  this.titleTextBlockStyle.setProperty("foreground", new SolidColorBrush(new Color(const$362/*Colors.White*/)));
  this.titleTextBlockStyle.setProperty("margin", new Thickness(10));
  this.titleTextBlockStyle.setProperty("horizontalAlignment", const$51/*HorizontalAlignment.Center*/);
}
_templateResources.prototype._initSubTitleTextBlock = function() {
  this.subTitleTextBlockStyle.setProperty("fontSize", 16);
  this.subTitleTextBlockStyle.setProperty("foreground", new SolidColorBrush(new Color(const$362/*Colors.White*/)));
  this.subTitleTextBlockStyle.setProperty("margin", new Thickness(10));
  this.subTitleTextBlockStyle.setProperty("horizontalAlignment", const$51/*HorizontalAlignment.Center*/);
}
_templateResources.prototype._initMainGrid = function() {
  var lgb = new LinearGradientBrush();
  lgb.direction = const$404/*LinearGradientDirection.topToBottom*/;
  lgb.stops.add(new GradientStop(new Color.hex$ctor("#3333AA"), 65));
  lgb.stops.add(new GradientStop(new Color(const$104/*Colors.Black*/), -1));
  var rList = new ObservableList_RowDefinition();
  rList.add(new RowDefinition.with$ctor(new GridLength.auto$ctor()));
  rList.add(new RowDefinition.with$ctor(new GridLength.auto$ctor()));
  rList.add(new RowDefinition.with$ctor(new GridLength.star$ctor(1)));
  this.mainGridStyle.setProperty("background", lgb);
  this.mainGridStyle.setProperty("rowDefinitions", rList);
  this.mainGridStyle.mergeWith([this.stretchedStyle]);
}
_templateResources.prototype._initContentBorder = function() {
  this.contentBorderStyle.setProperty("margin", new Thickness(10));
  this.contentBorderStyle.setProperty("borderThickness", new Thickness(10));
  this.contentBorderStyle.setProperty("borderColor", new SolidColorBrush(new Color.hex$ctor("#AAAAAA")));
  this.contentBorderStyle.setProperty("cornerRadius", 10);
  this.contentBorderStyle.setProperty("background", new SolidColorBrush(new Color(const$364/*Colors.WhiteSmoke*/)));
  this.contentBorderStyle.mergeWith([this.stretchedStyle]);
}
_templateResources.prototype._initInnerBorder = function() {
  this.innerBorderStyle.setProperty("borderThickness", new Thickness(5));
  this.innerBorderStyle.setProperty("borderColor", new SolidColorBrush(new Color.hex$ctor("#808080")));
  this.innerBorderStyle.mergeWith([this.stretchedStyle]);
}
// ********** Code for top level **************
//  ********** Library HashClient **************
// ********** Code for HashClient **************
function HashClient() {
  // Initializers done
}
HashClient.prototype.run = function() {
  LucaSystem.LucaSystem$factory();
  this.resources = new _templateResources();
  new _BindingImplementation($globals.LucaSystem_windowWidthProperty, $globals.LucaSystem_visualRoot.widthProperty, const$73/*BindingMode.OneWay*/, const$75/*const _DefaultConverter()*/);
  new _BindingImplementation($globals.LucaSystem_windowHeightProperty, $globals.LucaSystem_visualRoot.heightProperty, const$73/*BindingMode.OneWay*/, const$75/*const _DefaultConverter()*/);
  var mainGrid = new Grid();
  mainGrid.set$style(this.resources.mainGridStyle);
  var outerContentBorder = new Border();
  outerContentBorder.set$style(this.resources.contentBorderStyle);
  Grid.setRow(outerContentBorder, 2);
  mainGrid.children.add(outerContentBorder);
  var innerContentBorder = new Border();
  innerContentBorder.set$style(this.resources.innerBorderStyle);
  outerContentBorder.set$content(innerContentBorder);
  var title = new TextBlock();
  title.set$style(this.resources.titleTextBlockStyle);
  title.set$text("Value Conversion and Data Binding");
  mainGrid.children.add(title);
  var subTitle = new TextBlock();
  subTitle.set$style(this.resources.subTitleTextBlockStyle);
  subTitle.set$text("The value of the TextBox is bound to the TextBlock and converted on-the-fly to upper case.");
  Grid.setRow(subTitle, 1);
  mainGrid.children.add(subTitle);
  var contentGrid = this.buildContentGrid();
  innerContentBorder.set$content(contentGrid);
  this.generateContent(contentGrid);
  LucaSystem.renderRaw(mainGrid);
}
HashClient.prototype.generateContent = function(contentGrid) {
  var info = new TextBlock();
  info.set$style(this.resources.centeredStyle);
  info.set$text("Enter text into the text box below.  The text property of it is bound to a text block below it that has a value converter attached.  As you type, the text will appear in all caps as it passes through the converter.");
  info.set$width(500);
  contentGrid.children.add(info);
  var enter = new TextBox();
  enter.set$style(this.resources.centeredStyle);
  enter.set$width(300);
  enter.set$placeholder("Enter some lowercase text here...");
  Grid.setRow(enter, 1);
  contentGrid.children.add(enter);
  var output = new TextBlock();
  output.set$style(this.resources.centeredStyle);
  output.set$fontSize(24);
  output.set$text("hello");
  Grid.setRow(output, 2);
  contentGrid.children.add(output);
}
HashClient.prototype.buildContentGrid = function() {
  var g = new Grid();
  g.set$background(new SolidColorBrush(new Color(const$364/*Colors.WhiteSmoke*/)));
  g.set$style(this.resources.stretchedStyle);
  g.get$rowDefinitions().add(new RowDefinition.with$ctor(new GridLength.star$ctor(.3)));
  g.get$rowDefinitions().add(new RowDefinition.with$ctor(new GridLength.star$ctor(.3)));
  g.get$rowDefinitions().add(new RowDefinition.with$ctor(new GridLength.star$ctor(1)));
  return g;
}
// ********** Code for top level **************
function main() {
  new HashClient().run();
}
// ********** Generic Type Inheritance **************
/** Implements extends for generic types. */
function $inheritsMembers(child, parent) {
  child = child.prototype;
  parent = parent.prototype;
  Object.getOwnPropertyNames(parent).forEach(function(name) {
    if (typeof(child[name]) == 'undefined') child[name] = parent[name];
  });
}
$inheritsMembers(_DoubleLinkedQueueEntrySentinel_E, DoubleLinkedQueueEntry_E);
$inheritsMembers(_DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V, DoubleLinkedQueueEntry_KeyValuePair_K$V);
$inheritsMembers(ObservableList_ColumnDefinition, ListFactory_ColumnDefinition);
$inheritsMembers(ObservableList_FrameworkElement, ListFactory_FrameworkElement);
$inheritsMembers(ObservableList_RowDefinition, ListFactory_RowDefinition);
// 327 dynamic types.
// 502 types
// 41 !leaf
(function(){
  var v0/*CSSValueList*/ = 'CSSValueList|WebKitCSSFilterValue|WebKitCSSTransformValue';
  var v1/*HTMLInputElement*/ = 'HTMLInputElement|HTMLIsIndexElement';
  var v2/*SVGGradientElement*/ = 'SVGGradientElement|SVGLinearGradientElement|SVGRadialGradientElement';
  var v3/*SVGTextContentElement*/ = 'SVGTextContentElement|SVGTextPathElement|SVGTextPositioningElement|SVGAltGlyphElement|SVGTRefElement|SVGTSpanElement|SVGTextElement';
  var v4/*UIEvent*/ = 'UIEvent|CompositionEvent|KeyboardEvent|MouseEvent|SVGZoomEvent|TextEvent|TouchEvent|WheelEvent';
  var v5/*CharacterData*/ = 'CharacterData|Comment|Text|CDATASection';
  var v6/*Document*/ = 'Document|HTMLDocument|SVGDocument';
  var v7/*Element*/ = [v1/*HTMLInputElement*/,v2/*SVGGradientElement*/,v3/*SVGTextContentElement*/,'Element|HTMLElement|HTMLAnchorElement|HTMLAppletElement|HTMLAreaElement|HTMLBRElement|HTMLBaseElement|HTMLBaseFontElement|HTMLBodyElement|HTMLButtonElement|HTMLCanvasElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFormElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLAudioElement|HTMLVideoElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLSelectElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTextAreaElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|SVGElement|SVGAElement|SVGAltGlyphDefElement|SVGAltGlyphItemElement|SVGAnimationElement|SVGAnimateColorElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGSetElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGCursorElement|SVGDefsElement|SVGDescElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGFontElement|SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement|SVGForeignObjectElement|SVGGElement|SVGGlyphElement|SVGGlyphRefElement|SVGHKernElement|SVGImageElement|SVGLineElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGMissingGlyphElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTitleElement|SVGUseElement|SVGVKernElement|SVGViewElement'].join('|');
  var table = [
    // [dynamic-dispatch-tag, tags of classes implementing dynamic-dispatch-tag]
    ['AbstractWorker', 'AbstractWorker|SharedWorker|Worker'],
    ['ArrayBufferView', 'ArrayBufferView|DataView|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array'],
    ['AudioNode', 'AudioNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioSourceNode|AudioBufferSourceNode|MediaElementAudioSourceNode|BiquadFilterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|HighPass2FilterNode|JavaScriptAudioNode|LowPass2FilterNode|RealtimeAnalyserNode|WaveShaperNode'],
    ['AudioParam', 'AudioParam|AudioGain'],
    ['Blob', 'Blob|File'],
    ['CSSRule', 'CSSRule|CSSCharsetRule|CSSFontFaceRule|CSSImportRule|CSSMediaRule|CSSPageRule|CSSStyleRule|CSSUnknownRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule'],
    ['CSSValueList', v0/*CSSValueList*/],
    ['CSSValue', [v0/*CSSValueList*/,'CSSValue|CSSPrimitiveValue|SVGColor|SVGPaint'].join('|')],
    ['CanvasRenderingContext', 'CanvasRenderingContext|CanvasRenderingContext2D|WebGLRenderingContext'],
    ['CharacterData', v5/*CharacterData*/],
    ['DOMTokenList', 'DOMTokenList|DOMSettableTokenList'],
    ['DOMWindow', 'DOMWindow|Window'],
    ['Document', v6/*Document*/],
    ['HTMLInputElement', v1/*HTMLInputElement*/],
    ['SVGGradientElement', v2/*SVGGradientElement*/],
    ['SVGTextContentElement', v3/*SVGTextContentElement*/],
    ['Element', v7/*Element*/],
    ['Entry', 'Entry|DirectoryEntry|FileEntry'],
    ['EntrySync', 'EntrySync|DirectoryEntrySync|FileEntrySync'],
    ['UIEvent', v4/*UIEvent*/],
    ['Event', [v4/*UIEvent*/,'Event|AudioProcessingEvent|BeforeLoadEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|HashChangeEvent|IDBVersionChangeEvent|MessageEvent|MutationEvent|OfflineAudioCompletionEvent|OverflowEvent|PageTransitionEvent|PopStateEvent|ProgressEvent|XMLHttpRequestProgressEvent|SpeechInputEvent|StorageEvent|TrackEvent|WebGLContextEvent|WebKitAnimationEvent|WebKitTransitionEvent'].join('|')],
    ['HTMLCollection', 'HTMLCollection|HTMLOptionsCollection|HTMLPropertiesCollection'],
    ['IDBCursor', 'IDBCursor|IDBCursorWithValue'],
    ['IDBRequest', 'IDBRequest|IDBVersionChangeRequest'],
    ['Node', [v5/*CharacterData*/,v6/*Document*/,v7/*Element*/,'Node|Attr|DocumentFragment|DocumentType|Entity|EntityReference|Notation|ProcessingInstruction'].join('|')],
    ['SVGLocatable', 'SVGLocatable|SVGTransformable'],
    ['SVGPathSeg', 'SVGPathSeg|SVGPathSegArcAbs|SVGPathSegArcRel|SVGPathSegClosePath|SVGPathSegCurvetoCubicAbs|SVGPathSegCurvetoCubicRel|SVGPathSegCurvetoCubicSmoothAbs|SVGPathSegCurvetoCubicSmoothRel|SVGPathSegCurvetoQuadraticAbs|SVGPathSegCurvetoQuadraticRel|SVGPathSegCurvetoQuadraticSmoothAbs|SVGPathSegCurvetoQuadraticSmoothRel|SVGPathSegLinetoAbs|SVGPathSegLinetoHorizontalAbs|SVGPathSegLinetoHorizontalRel|SVGPathSegLinetoRel|SVGPathSegLinetoVerticalAbs|SVGPathSegLinetoVerticalRel|SVGPathSegMovetoAbs|SVGPathSegMovetoRel'],
    ['SVGStylable', 'SVGStylable|SVGFilterPrimitiveStandardAttributes'],
    ['SVGZoomAndPan', 'SVGZoomAndPan|SVGViewSpec'],
    ['StyleSheet', 'StyleSheet|CSSStyleSheet'],
    ['WorkerContext', 'WorkerContext|DedicatedWorkerContext|SharedWorkercontext'],
  ];
  $dynamicSetMetadata(table);
})();
//  ********** Globals **************
function $static_init(){
  $globals.HashableObject__hashNum = 0;
  $globals.LucaSystem_initialized = false;
}
var const$100 = new Colors("#F5F5DC", "Beige")/*const Colors("#F5F5DC", "Beige")*/;
var const$102 = new Colors("#FFE4C4", "Bisque")/*const Colors("#FFE4C4", "Bisque")*/;
var const$104 = new Colors("#000000", "Black")/*const Colors("#000000", "Black")*/;
var const$106 = new Colors("#FFEBCD", "BlanchedAlmond")/*const Colors("#FFEBCD", "BlanchedAlmond")*/;
var const$108 = new Colors("#0000FF", "Blue")/*const Colors("#0000FF", "Blue")*/;
var const$11 = new FrameworkException("Binding not found in binding registry when attempting to unregister.")/*const FrameworkException("Binding not found in binding registry when attempting to unregister.")*/;
var const$110 = new Colors("#8a2be2", "BlueViolet")/*const Colors("#8a2be2", "BlueViolet")*/;
var const$112 = new Colors("#a52a2a", "Brown")/*const Colors("#a52a2a", "Brown")*/;
var const$114 = new Colors("#deb887", "BurlyWood")/*const Colors("#deb887", "BurlyWood")*/;
var const$116 = new Colors("#5f9ea0", "CadetBlue")/*const Colors("#5f9ea0", "CadetBlue")*/;
var const$118 = new Colors("#7fff00", "Chartreuse")/*const Colors("#7fff00", "Chartreuse")*/;
var const$12 = new BindingMode(2)/*const BindingMode(2)*/;
var const$120 = new Colors("#d2691e", "Chocolate")/*const Colors("#d2691e", "Chocolate")*/;
var const$122 = new Colors("#ff7f50", "Coral")/*const Colors("#ff7f50", "Coral")*/;
var const$124 = new Colors("#6495ed", "ConflowerBlue")/*const Colors("#6495ed", "ConflowerBlue")*/;
var const$126 = new Colors("#fff8dc", "Cornsilk")/*const Colors("#fff8dc", "Cornsilk")*/;
var const$128 = new Colors("#dc143c", "Crimson")/*const Colors("#dc143c", "Crimson")*/;
var const$130 = new Colors("#00ffff", "Cyan")/*const Colors("#00ffff", "Cyan")*/;
var const$132 = new Colors("#00008b", "DarkBlue")/*const Colors("#00008b", "DarkBlue")*/;
var const$134 = new Colors("#008b8b", "DarkCyan")/*const Colors("#008b8b", "DarkCyan")*/;
var const$136 = new Colors("#b8860b", "DarkGoldenrod")/*const Colors("#b8860b", "DarkGoldenrod")*/;
var const$138 = new Colors("#A9A9A9", "DarkGray")/*const Colors("#A9A9A9", "DarkGray")*/;
var const$14 = new FrameworkException("Two-Way partner binding not found in binding registry when attempting to unregister.")/*const FrameworkException("Two-Way partner binding not found in binding registry when attempting to unregister.")*/;
var const$140 = new Colors("#006400", "DarkGreen")/*const Colors("#006400", "DarkGreen")*/;
var const$142 = new Colors("#000000", "DarkKhaki")/*const Colors("#000000", "DarkKhaki")*/;
var const$144 = new Colors("#8b008b", "DarkMagenta")/*const Colors("#8b008b", "DarkMagenta")*/;
var const$146 = new Colors("#556b2f", "DarkOliveGreen")/*const Colors("#556b2f", "DarkOliveGreen")*/;
var const$148 = new Colors("#ff8c00", "DarkOrange")/*const Colors("#ff8c00", "DarkOrange")*/;
var const$15 = new Cursors("auto")/*const Cursors("auto")*/;
var const$150 = new Colors("#9932cc", "DarkOrchid")/*const Colors("#9932cc", "DarkOrchid")*/;
var const$152 = new Colors("#8b0000", "DarkRed")/*const Colors("#8b0000", "DarkRed")*/;
var const$154 = new Colors("#e9967a", "DarkSalmon")/*const Colors("#e9967a", "DarkSalmon")*/;
var const$156 = new Colors("#8fbc8f", "DarkSeaGreen")/*const Colors("#8fbc8f", "DarkSeaGreen")*/;
var const$158 = new Colors("#483d8b", "DarkSlateBlue")/*const Colors("#483d8b", "DarkSlateBlue")*/;
var const$160 = new Colors("#2f4f4f", "DarkSlateGray")/*const Colors("#2f4f4f", "DarkSlateGray")*/;
var const$162 = new Colors("#00ced1", "DarkTurquoise")/*const Colors("#00ced1", "DarkTurquoise")*/;
var const$164 = new Colors("#9400d3", "DarkViolet")/*const Colors("#9400d3", "DarkViolet")*/;
var const$166 = new Colors("#ff1493", "DeepPink")/*const Colors("#ff1493", "DeepPink")*/;
var const$168 = new Colors("#00bfff", "DeepSkyBlue")/*const Colors("#00bfff", "DeepSkyBlue")*/;
var const$17 = new Cursors("crosshair")/*const Cursors("crosshair")*/;
var const$170 = new Colors("#696969", "DimGray")/*const Colors("#696969", "DimGray")*/;
var const$172 = new Colors("#1e90ff", "DodgerBlue")/*const Colors("#1e90ff", "DodgerBlue")*/;
var const$174 = new Colors("#b22222", "Firebrick")/*const Colors("#b22222", "Firebrick")*/;
var const$176 = new Colors("#fffaf0", "FloralWhite")/*const Colors("#fffaf0", "FloralWhite")*/;
var const$178 = new Colors("#228b22", "ForestGreen")/*const Colors("#228b22", "ForestGreen")*/;
var const$180 = new Colors("#ff00ff", "Fuchsia")/*const Colors("#ff00ff", "Fuchsia")*/;
var const$182 = new Colors("#dcdcdc", "Gainsboro")/*const Colors("#dcdcdc", "Gainsboro")*/;
var const$184 = new Colors("#f8f8ff", "GhostWhite")/*const Colors("#f8f8ff", "GhostWhite")*/;
var const$186 = new Colors("#ffd700", "Gold")/*const Colors("#ffd700", "Gold")*/;
var const$188 = new Colors("#daa520", "Goldenrod")/*const Colors("#daa520","Goldenrod")*/;
var const$19 = new Cursors("default")/*const Cursors("default")*/;
var const$190 = new Colors("#808080", "Gray")/*const Colors("#808080", "Gray")*/;
var const$192 = new Colors("#008000", "Green")/*const Colors("#008000", "Green")*/;
var const$194 = new Colors("#adff2f", "GreenYellow")/*const Colors("#adff2f", "GreenYellow")*/;
var const$196 = new Colors("#f0fff0", "Honeydew")/*const Colors("#f0fff0", "Honeydew")*/;
var const$198 = new Colors("#ff69b4", "HotPink")/*const Colors("#ff69b4", "HotPink")*/;
var const$2 = new _DeletedKeySentinel()/*const _DeletedKeySentinel()*/;
var const$200 = new Colors("#cd5c5c", "IndianRed")/*const Colors("#cd5c5c", "IndianRed")*/;
var const$202 = new Colors("#4b0082", "Indigo")/*const Colors("#4b0082", "Indigo")*/;
var const$204 = new Colors("#fffff0", "Ivory")/*const Colors("#fffff0", "Ivory")*/;
var const$206 = new Colors("#f0e68c", "Khaki")/*const Colors("#f0e68c", "Khaki")*/;
var const$208 = new Colors("#e6e6fa", "Lavender")/*const Colors("#e6e6fa", "Lavender")*/;
var const$21 = new Cursors("e-resize")/*const Cursors("e-resize")*/;
var const$210 = new Colors("#fff0f5", "LavenderBlush")/*const Colors("#fff0f5", "LavenderBlush")*/;
var const$212 = new Colors("#7cfc00", "LawnGreen")/*const Colors("#7cfc00", "LawnGreen")*/;
var const$214 = new Colors("#fffacd", "LemonChiffon")/*const Colors("#fffacd","LemonChiffon")*/;
var const$216 = new Colors("#add8e6", "LightBlue")/*const Colors("#add8e6", "LightBlue")*/;
var const$218 = new Colors("#f08080", "LightCoral")/*const Colors("#f08080", "LightCoral")*/;
var const$220 = new Colors("#e0ffff", "LightCyan")/*const Colors("#e0ffff", "LightCyan")*/;
var const$222 = new Colors("#fafad2", "LightGoldenrod")/*const Colors("#fafad2", "LightGoldenrod")*/;
var const$224 = new Colors("#d3d3d3", "LightGray")/*const Colors("#d3d3d3", "LightGray")*/;
var const$226 = new Colors("#90ee90", "LightGreen")/*const Colors("#90ee90", "LightGreen")*/;
var const$228 = new Colors("#ffb6c1", "LightPink")/*const Colors("#ffb6c1", "LightPink")*/;
var const$23 = new Cursors("help")/*const Cursors("help")*/;
var const$230 = new Colors("#ffa07a", "LightSalmon")/*const Colors("#ffa07a", "LightSalmon")*/;
var const$232 = new Colors("#20b2aa", "LightSeaGreen")/*const Colors("#20b2aa", "LightSeaGreen")*/;
var const$234 = new Colors("#87cefa", "LightSkyBlue")/*const Colors("#87cefa", "LightSkyBlue")*/;
var const$236 = new Colors("#778899", "LightSlateGray")/*const Colors("#778899", "LightSlateGray")*/;
var const$238 = new Colors("#b0c4de", "LightSteelBlue")/*const Colors("#b0c4de", "LightSteelBlue")*/;
var const$240 = new Colors("#ffffe0", "LightYellow")/*const Colors("#ffffe0", "LightYellow")*/;
var const$242 = new Colors("#00ff00", "Lime")/*const Colors("#00ff00", "Lime")*/;
var const$244 = new Colors("#32cd32", "LimeGreen")/*const Colors("#32cd32", "LimeGreen")*/;
var const$246 = new Colors("#faf0e6", "Linen")/*const Colors("#faf0e6", "Linen")*/;
var const$248 = new Colors("ff00ff", "Magenta")/*const Colors("ff00ff", "Magenta")*/;
var const$25 = new Cursors("move")/*const Cursors("move")*/;
var const$250 = new Colors("#800000", "Maroon")/*const Colors("#800000", "Maroon")*/;
var const$252 = new Colors("#66cdaa", "MediumAquamarine")/*const Colors("#66cdaa", "MediumAquamarine")*/;
var const$254 = new Colors("#0000cd", "MediumBlue")/*const Colors("#0000cd", "MediumBlue")*/;
var const$256 = new Colors("#ba55d3", "MediumOrchid")/*const Colors("#ba55d3", "MediumOrchid")*/;
var const$258 = new Colors("#9370db", "MediumPurple")/*const Colors("#9370db", "MediumPurple")*/;
var const$260 = new Colors("#3cb371", "MediumSeaGreen")/*const Colors("#3cb371", "MediumSeaGreen")*/;
var const$262 = new Colors("#7b68ee", "MediumSlateBlue")/*const Colors("#7b68ee", "MediumSlateBlue")*/;
var const$264 = new Colors("#00fa9a", "MediumSpringGreen")/*const Colors("#00fa9a", "MediumSpringGreen")*/;
var const$266 = new Colors("#48d1cc", "MediumTurquoise")/*const Colors("#48d1cc", "MediumTurquoise")*/;
var const$268 = new Colors("#c71585", "MediumVioletRed")/*const Colors("#c71585", "MediumVioletRed")*/;
var const$27 = new Cursors("n-resize")/*const Cursors("n-resize")*/;
var const$270 = new Colors("#191970", "MidnightBlue")/*const Colors("#191970", "MidnightBlue")*/;
var const$272 = new Colors("#f5fffa", "MintCream")/*const Colors("#f5fffa", "MintCream")*/;
var const$274 = new Colors("#ffe4e1", "MistyRose")/*const Colors("#ffe4e1", "MistyRose")*/;
var const$276 = new Colors("#ffe4b5", "Moccasin")/*const Colors("#ffe4b5", "Moccasin")*/;
var const$278 = new Colors("#ffdead", "NavajoWhite")/*const Colors("#ffdead", "NavajoWhite")*/;
var const$280 = new Colors("#000080", "Navy")/*const Colors("#000080", "Navy")*/;
var const$282 = new Colors("#fdf5e6", "OldLace")/*const Colors("#fdf5e6", "OldLace")*/;
var const$284 = new Colors("#808000", "Olive")/*const Colors("#808000", "Olive")*/;
var const$286 = new Colors("#6b8e23", "OliveDrab")/*const Colors("#6b8e23", "OliveDrab")*/;
var const$288 = new Colors("#ffa500", "Orange")/*const Colors("#ffa500", "Orange")*/;
var const$29 = new Cursors("ne-resize")/*const Cursors("ne-resize")*/;
var const$290 = new Colors("#ff4500", "OrangeRed")/*const Colors("#ff4500", "OrangeRed")*/;
var const$292 = new Colors("#da70d6", "Orchid")/*const Colors("#da70d6", "Orchid")*/;
var const$294 = new Colors("#eee8aa", "PaleGoldenrod")/*const Colors("#eee8aa", "PaleGoldenrod")*/;
var const$296 = new Colors("#98fb98", "PaleGreen")/*const Colors("#98fb98", "PaleGreen")*/;
var const$298 = new Colors("#afeeee", "PaleTurquoise")/*const Colors("#afeeee", "PaleTurquoise")*/;
var const$300 = new Colors("#db7093", "PaleVioletRed")/*const Colors("#db7093", "PaleVioletRed")*/;
var const$302 = new Colors("#ffefd5", "PapayaWhip")/*const Colors("#ffefd5", "PapayaWhip")*/;
var const$304 = new Colors("#ffdab9", "PeachPuff")/*const Colors("#ffdab9", "PeachPuff")*/;
var const$306 = new Colors("#cd853f", "Peru")/*const Colors("#cd853f", "Peru")*/;
var const$308 = new Colors("#ffc0cb", "Pink")/*const Colors("#ffc0cb", "Pink")*/;
var const$31 = new Cursors("nw-resize")/*const Cursors("nw-resize")*/;
var const$310 = new Colors("#dda0dd", "Plum")/*const Colors("#dda0dd", "Plum")*/;
var const$312 = new Colors("#b0e0e6", "PowderBlue")/*const Colors("#b0e0e6", "PowderBlue")*/;
var const$314 = new Colors("#800080", "Purple")/*const Colors("#800080", "Purple")*/;
var const$316 = new Colors("#ff0000", "Red")/*const Colors("#ff0000", "Red")*/;
var const$318 = new Colors("#bc8f8f", "RosyBrown")/*const Colors("#bc8f8f", "RosyBrown")*/;
var const$320 = new Colors("#4169e1", "RoyalBlue")/*const Colors("#4169e1", "RoyalBlue")*/;
var const$322 = new Colors("#8b4513", "SaddleBrown")/*const Colors("#8b4513", "SaddleBrown")*/;
var const$324 = new Colors("#fa8072", "Salmon")/*const Colors("#fa8072", "Salmon")*/;
var const$326 = new Colors("#f4a460", "SandyBrown")/*const Colors("#f4a460", "SandyBrown")*/;
var const$328 = new Colors("#2e8b57", "SeaGreen")/*const Colors("#2e8b57", "SeaGreen")*/;
var const$33 = new Cursors("pointer")/*const Cursors("pointer")*/;
var const$330 = new Colors("#fff5ee", "SeaShell")/*const Colors("#fff5ee", "SeaShell")*/;
var const$332 = new Colors("#a0522d", "Sienna")/*const Colors("#a0522d", "Sienna")*/;
var const$334 = new Colors("#c0c0c0", "Silver")/*const Colors("#c0c0c0", "Silver")*/;
var const$336 = new Colors("#87ceeb", "SkyBlue")/*const Colors("#87ceeb", "SkyBlue")*/;
var const$338 = new Colors("#6a5acd", "SlateBlue")/*const Colors("#6a5acd", "SlateBlue")*/;
var const$340 = new Colors("#708090", "SlateGray")/*const Colors("#708090", "SlateGray")*/;
var const$342 = new Colors("#fffafa", "Snow")/*const Colors("#fffafa", "Snow")*/;
var const$344 = new Colors("#00ff7f", "SpringGreen")/*const Colors("#00ff7f", "SpringGreen")*/;
var const$346 = new Colors("#4682b4", "SteelBlue")/*const Colors("#4682b4", "SteelBlue")*/;
var const$348 = new Colors("#d2b48c", "Tan")/*const Colors("#d2b48c", "Tan")*/;
var const$35 = new Cursors("progress")/*const Cursors("progress")*/;
var const$350 = new Colors("#008080", "Teal")/*const Colors("#008080", "Teal")*/;
var const$352 = new Colors("#d8bfd8", "Thistle")/*const Colors("#d8bfd8", "Thistle")*/;
var const$354 = new Colors("#ff6347", "Tomato")/*const Colors("#ff6347", "Tomato")*/;
var const$356 = new Colors("#40e0d0", "Turquoise")/*const Colors("#40e0d0", "Turquoise")*/;
var const$358 = new Colors("#ee82ee", "Violet")/*const Colors("#ee82ee", "Violet")*/;
var const$360 = new Colors("#f5deb3", "Wheat")/*const Colors("#f5deb3", "Wheat")*/;
var const$362 = new Colors("#ffffff", "White")/*const Colors("#ffffff", "White")*/;
var const$364 = new Colors("#f5f5f5", "WhiteSmoke")/*const Colors("#f5f5f5", "WhiteSmoke")*/;
var const$366 = new Colors("#ffff00", "Yellow")/*const Colors("#ffff00", "Yellow")*/;
var const$368 = new Colors("#9acd32", "YellowGreen")/*const Colors("#9acd32", "YellowGreen")*/;
var const$37 = new Cursors("s-resize")/*const Cursors("s-resize")*/;
var const$370 = new StringToSolidColorBrushConverter()/*const StringToSolidColorBrushConverter()*/;
var const$372 = new Orientation("horizontal")/*const Orientation("horizontal")*/;
var const$374 = new Orientation("vertical")/*const Orientation("vertical")*/;
var const$376 = new FrameworkException("Invalid GridUntiType value.")/*const FrameworkException("Invalid GridUntiType value.")*/;
var const$377 = new GridUnitType(2)/*const GridUnitType(2)*/;
var const$379 = new GridUnitType(1)/*const GridUnitType(1)*/;
var const$381 = new GridUnitType(3)/*const GridUnitType(3)*/;
var const$385 = new StringToBooleanConverter()/*const StringToBooleanConverter()*/;
var const$39 = new Cursors("se-resize")/*const Cursors("se-resize")*/;
var const$4 = new Visibility(true)/*const Visibility(true)*/;
var const$401 = new FrameworkException("LUCA UI Framework Objects cannot be passed as StyleTemplate setter values.")/*const FrameworkException("LUCA UI Framework Objects cannot be passed as StyleTemplate setter values.")*/;
var const$402 = new LinearGradientDirection("left")/*const LinearGradientDirection("left")*/;
var const$404 = new LinearGradientDirection("top")/*const LinearGradientDirection("top")*/;
var const$41 = new Cursors("sw-resize")/*const Cursors("sw-resize")*/;
var const$43 = new Cursors("text")/*const Cursors("text")*/;
var const$45 = new Cursors("wait")/*const Cursors("wait")*/;
var const$47 = new Cursors("inherit")/*const Cursors("inherit")*/;
var const$49 = new FrameworkException("Cursor property value not recognized.")/*const FrameworkException("Cursor property value not recognized.")*/;
var const$50 = new StringToCursorConverter()/*const StringToCursorConverter()*/;
var const$51 = new HorizontalAlignment(1)/*const HorizontalAlignment(1)*/;
var const$53 = new HorizontalAlignment(2)/*const HorizontalAlignment(2)*/;
var const$55 = new HorizontalAlignment(3)/*const HorizontalAlignment(3)*/;
var const$57 = new HorizontalAlignment(4)/*const HorizontalAlignment(4)*/;
var const$59 = new FrameworkException("Undefined HorizontalAlignment value.")/*const FrameworkException("Undefined HorizontalAlignment value.")*/;
var const$6 = new StringToNumericConverter()/*const StringToNumericConverter()*/;
var const$60 = new StringToHorizontalAlignmentConverter()/*const StringToHorizontalAlignmentConverter()*/;
var const$61 = new VerticalAlignment(1)/*const VerticalAlignment(1)*/;
var const$63 = new VerticalAlignment(2)/*const VerticalAlignment(2)*/;
var const$65 = new VerticalAlignment(3)/*const VerticalAlignment(3)*/;
var const$67 = new VerticalAlignment(4)/*const VerticalAlignment(4)*/;
var const$69 = new FrameworkException("Undefined VerticalAlignment value.")/*const FrameworkException("Undefined VerticalAlignment value.")*/;
var const$7 = new StringToThicknessConverter()/*const StringToThicknessConverter()*/;
var const$70 = new StringToVerticalAlignmentConverter()/*const StringToVerticalAlignmentConverter()*/;
var const$71 = new FrameworkException("Attempted to bind to/from null FrameworkProperty.")/*const FrameworkException("Attempted to bind to/from null FrameworkProperty.")*/;
var const$72 = new FrameworkException("Attempted to bind same property together.")/*const FrameworkException("Attempted to bind same property together.")*/;
var const$73 = new BindingMode(1)/*const BindingMode(1)*/;
var const$75 = new _DefaultConverter()/*const _DefaultConverter()*/;
var const$76 = new IllegalAccessException()/*const IllegalAccessException()*/;
var const$77 = new EmptyQueueException()/*const EmptyQueueException()*/;
var const$78 = _constMap([])/*const {}*/;
var const$79 = new FrameworkException("Element is already child of another element.")/*const FrameworkException("Element is already child of another element.")*/;
var const$8 = new FrameworkException("Unable to parse Thickness property string.  Use format '0', '0,0', or '0,0,0,0'")/*const FrameworkException("Unable to parse Thickness property string.  Use format '0', '0,0', or '0,0,0,0'")*/;
var const$82 = new FrameworkException("Child registration requires parental assignment.")/*const FrameworkException("Child registration requires parental assignment.")*/;
var const$83 = new FrameworkException("Horizontal binding already set in _ContainerElement.")/*const FrameworkException("Horizontal binding already set in _ContainerElement.")*/;
var const$84 = new FrameworkException("Vertical binding already set in _ContainerElement.")/*const FrameworkException("Vertical binding already set in _ContainerElement.")*/;
var const$85 = new NotImplementedException()/*const NotImplementedException()*/;
var const$89 = new NoMoreElementsException()/*const NoMoreElementsException()*/;
var const$9 = new BindingMode(3)/*const BindingMode(3)*/;
var const$90 = new Colors("#F0F8FF", "AliceBlue")/*const Colors("#F0F8FF", "AliceBlue")*/;
var const$92 = new Colors("#FAEBD7", "AntiqueWhite")/*const Colors("#FAEBD7", "AntiqueWhite")*/;
var const$94 = new Colors("#00FFFF", "Aqua")/*const Colors("#00FFFF", "Aqua")*/;
var const$96 = new Colors("#7FFFD4", "Aquamarine")/*const Colors("#7FFFD4", "Aquamarine")*/;
var const$98 = new Colors("#F0FFFF", "Azure")/*const Colors("#F0FFFF", "Azure")*/;
var const$384 = new FrameworkException("GridCell parent must be of type Grid.")/*const FrameworkException(parentErrorMessage)*/;
var const$87 = new FrameworkException("BorderContainer parent must be of type Border.")/*const FrameworkException(parentErrorMessage)*/;
var const$397 = ImmutableList.ImmutableList$from$factory(["password", "email", "date", "datetime", "month", "search", "tel", "text", "time", "url", "week"])/*const <String>[password, email, date, datetime, month, search, telephone, text, time, url, week]*/;
var $globals = {};
$static_init();
main();
